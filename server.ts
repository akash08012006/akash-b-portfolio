import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { resumeData } from "./src/data";

// Initialize express app
const app = express();
const PORT = 3000;

// JSON parser
app.use(express.json());

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("Warning: GEMINI_API_KEY is not set. Chatbot will run in fallback mock mode.");
  }
} catch (error) {
  console.error("Error initializing Gemini API:", error);
}

// REST API endpoint: Chat with Akash's AI Clone
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array." });
  }

  // If no API key or SDK failed, use a local rule-based helper
  if (!ai) {
    const lastUserMsg = messages[messages.length - 1]?.text || "";
    const lower = lastUserMsg.toLowerCase();
    let reply = "Hello! I am Akash B's AI Assistant. I can see that the portfolio owner hasn't fully set up the Gemini API key in their Secrets panel yet, but let me help you using my fallback intelligence!\n\n";
    
    if (lower.includes("project") || lower.includes("fixmycity") || lower.includes("railway") || lower.includes("edusphere")) {
      reply += "Akash has worked on several awesome projects:\n" +
               "1. **FixMyCity**: An AI-powered civic complaint categorization & workflow platform.\n" +
               "2. **Railway Navigation**: Passenger route optimizer using Dijkstra's algorithm.\n" +
               "3. **Edusphere**: Smart classroom and resource center built with React.\n\nWhich one would you like to know more about?";
    } else if (lower.includes("skill") || lower.includes("language") || lower.includes("python") || lower.includes("java")) {
      reply += "Akash's technical toolset is highly robust:\n" +
               "- **Programming**: Java, Python, SQL\n" +
               "- **Web Dev**: React, HTML, CSS, JavaScript, Tailwind\n" +
               "- **Tools**: Git, GitHub, VS Code\n" +
               "- **Core concepts**: Data Structures & Algorithms, DBMS, OOPs, ML Fundamentals.";
    } else if (lower.includes("internship") || lower.includes("experience") || lower.includes("work")) {
      reply += "Akash completed two remote internships at **Brainery Spot Technologies**:\n" +
               "1. **Machine Learning Intern**: Worked on preprocessing, model building, and evaluation.\n" +
               "2. **Full Stack Development Intern**: Built responsive web pages and connected them to services.";
    } else if (lower.includes("education") || lower.includes("college") || lower.includes("cgpa")) {
      reply += "Akash is pursuing B.Tech in **Computer Science and Business Systems** at **VSB Engineering College, Karur** (2023 - 2027) with an current CGPA of **8.0**.";
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach")) {
      reply += `You can reach Akash B directly:\n- **Email**: ${resumeData.email}\n- **Phone**: ${resumeData.phone}\n- **LinkedIn**: [linkedin.com/in/akash-b-b2559635b](https://linkedin.com/in/akash-b-b2559635b)\n- **GitHub**: [github.com/akash08012006](https://github.com/akash08012006)`;
    } else {
      reply += `Hello! I can answer anything about Akash B's technical skills, academic projects, certifications, or internships. Try asking 'Tell me about your projects' or 'What are your skills?'.`;
    }
    return res.json({ text: reply });
  }

  try {
    // We construct a system instruction containing the complete, detailed resume database
    const systemInstruction = `You are a virtual AI representative for "Akash B", a Computer Science and Business Systems student.
Your job is to assist recruiters, peers, and visitors browsing Akash's portfolio. You must speak in the first person ("I", "my") as if you are Akash, or as Akash's highly capable AI Assistant clone.

Here is Akash's verified resume details:
----------------------------------------
Name: ${resumeData.name}
Location: ${resumeData.location}
Email: ${resumeData.email}
Phone: ${resumeData.phone}
LinkedIn: https://${resumeData.linkedin}
GitHub: https://${resumeData.github}
LeetCode: https://${resumeData.leetcode}

Professional Summary:
${resumeData.summary}

Education:
${resumeData.education.map(e => `- ${e.degree} from ${e.institution} (${e.period}), Grade: ${e.grade}`).join('\n')}

Technical Skills:
- Languages: ${resumeData.skills.languages.join(', ')}
- Web Technologies: ${resumeData.skills.web.join(', ')}
- Core Concepts: ${resumeData.skills.concepts.join(', ')}
- Tools: ${resumeData.skills.tools.join(', ')}

Projects:
${resumeData.projects.map(p => `- **${p.title} (${p.subtitle})**: ${p.description}\n  Highlights:\n${p.points.map(pt => `    * ${pt}`).join('\n')}\n  Interactive Mockup: ${p.mockup}`).join('\n\n')}

Internships:
${resumeData.internships.map(i => `- **${i.role}** at ${i.company} (${i.period}):\n${i.points.map(pt => `    * ${pt}`).join('\n')}`).join('\n\n')}

Certifications:
${resumeData.certifications.map(c => `- ${c.name} (Issued by ${c.issuer})`).join('\n')}
----------------------------------------

When someone asks a question, reply in a helpful, professional, and slightly enthusiastic technical student tone. Be succinct but informative.
Refer them to Akash's contact details (Email: ${resumeData.email}, Phone: ${resumeData.phone}) if they want to interview him or hire him!
Answer the question accurately based ONLY on the resume details provided. Do not make up any extra internships or facts outside of this.`;

    // Map conversation history to Gemini content parts
    // We can use standard generateContent with a conversational style
    // To feed the entire history, we build a contents array.
    const contents = messages.map((m: any) => ({
      role: m.role === 'model' ? 'model' as const : 'user' as const,
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "I'm sorry, I couldn't formulate a response. Please reach out to me via email!" });
  } catch (error: any) {
    console.error("Gemini call failed:", error);
    res.status(500).json({ error: "Failed to generate AI response. Falling back to simple answering.", details: error.message });
  }
});

// Simple API for contact form submission logging/validation
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Please fill in all fields." });
  }
  console.log(`Received contact message from ${name} (${email}): ${message}`);
  res.json({ success: true, message: "Thank you for reaching out! Akash will get back to you shortly." });
});

// Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
