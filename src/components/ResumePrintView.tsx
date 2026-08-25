import React from 'react';
import { resumeData } from '../data';

export default function ResumePrintView() {
  return (
    <div className="font-serif text-black p-10 max-w-[800px] mx-auto leading-normal text-[13px] bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-black uppercase mb-1">{resumeData.name}</h1>
        <p className="text-xs text-slate-700 font-sans tracking-wide">
          {resumeData.location}
        </p>
        <div className="text-[11px] text-slate-800 font-sans mt-2 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <a href={`mailto:${resumeData.email}`} className="hover:underline">{resumeData.email}</a>
          <span className="text-slate-400">•</span>
          <span>{resumeData.phone}</span>
          <span className="text-slate-400">•</span>
          <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/akash-b-b2559635b</a>
          <span className="text-slate-400">•</span>
          <a href={`https://${resumeData.github}`} target="_blank" rel="noreferrer" className="hover:underline">github.com/akash08012006</a>
          <span className="text-slate-400">•</span>
          <a href={`https://${resumeData.leetcode}`} target="_blank" rel="noreferrer" className="hover:underline">leetcode.com/akash_08_01</a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">Professional Summary</h2>
        <p className="text-justify text-slate-900 leading-relaxed text-[12.5px]">
          {resumeData.summary}
        </p>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">Education</h2>
        <div className="space-y-3">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-[13px]">
                <span>{edu.degree}</span>
                <span className="font-normal text-xs text-slate-700">{edu.period}</span>
              </div>
              <div className="flex justify-between items-baseline text-slate-700 text-xs">
                <span>{edu.institution}</span>
                <span className="font-semibold text-slate-900">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">Technical Skills</h2>
        <div className="space-y-1 text-slate-900 text-[12.5px]">
          <div>
            <span className="font-bold">Programming Languages:</span> {resumeData.skills.languages.join(', ')}
          </div>
          <div>
            <span className="font-bold">Web Technologies:</span> {resumeData.skills.web.slice(0, 2).join(', ')} (HTML, CSS)
          </div>
          <div>
            <span className="font-bold">Core Concepts:</span> {resumeData.skills.concepts.slice(0, 3).map(c => c.replace(/ \(.*\)/, '')).join(', ')}
          </div>
          <div>
            <span className="font-bold">Tools:</span> {resumeData.skills.tools.slice(0, 2).join(', ')}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">Projects</h2>
        <div className="space-y-3">
          {resumeData.projects.map((proj, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-bold text-slate-900 text-[13px]">{proj.title}: {proj.subtitle}</div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-800 text-[12.5px] leading-relaxed">
                {proj.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Internships */}
      <div className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">Internships</h2>
        <div className="space-y-3">
          {resumeData.internships.map((intern, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-[13px]">
                <span>{intern.role}</span>
                <span className="font-normal text-xs text-slate-700">Brainery Spot Technologies</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5 text-slate-800 text-[12.5px] leading-relaxed">
                {intern.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">Certifications</h2>
        <ul className="list-disc pl-5 space-y-0.5 text-slate-800 text-[12.5px]">
          {resumeData.certifications.map((cert, idx) => (
            <li key={idx}>
              <span className="font-medium text-slate-900">{cert.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
