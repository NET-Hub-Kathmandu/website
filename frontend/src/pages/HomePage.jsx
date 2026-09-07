import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeSection } from '../components/sections/MarqueeSection';
import { AboutSection } from '../components/sections/AboutSection';
import { StatsSection } from '../components/sections/StatsSection';
import { PhotoBreak } from '../components/sections/PhotoBreak';
import { eventsData } from '../data/eventsData';

export function HomePage() {
  const [activeCodeTab, setActiveCodeTab] = useState('minimal-api');

  const codeSnippets = {
    'minimal-api': `// C# 12 / .NET 8 Minimal API with Clean Architecture
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICommunityService, CommunityService>();

var app = builder.Build();

app.MapGet("/api/events/next", async (ICommunityService svc) =>
{
    var nextEvent = await svc.GetNextMeetupAsync();
    return Results.Ok(nextEvent);
})
.WithName("GetNextMeetup")
.WithOpenApi();

app.Run();`,
    'blazor': `@* Blazor WebAssembly 8 — Realtime Meetup RSVP *@
@page "/rsvp/{EventId:int}"
@inject HttpClient Http

<div class="attendee-counter">
    <h4>Live Kathmandu Attendees: @count</h4>
    <button class="btn btn-primary" @onclick="ConfirmRsvp">
        Claim Free Seat
    </button>
</div>

@code {
    [Parameter] public int EventId { get; set; }
    private int count = 933;

    private async Task ConfirmRsvp()
    {
        count++;
        await Http.PostAsJsonAsync($"/api/events/{EventId}/rsvp", new { });
    }
}`,
    'ef-core': `// High-Performance Query with EF Core 8
public async Task<List<WorkshopDto>> GetActiveWorkshopsAsync(AppDbContext db)
{
    return await db.Workshops
        .AsNoTracking()
        .Where(w => w.Location == "Kathmandu" && w.IsPublished)
        .OrderByDescending(w => w.EventDate)
        .Select(w => new WorkshopDto(
            w.Id,
            w.Title,
            w.SpeakerName,
            w.Venue
        ))
        .ToListAsync();
}`
  };

  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <AboutSection />

      {/* Interactive Code Architecture Showcase */}
      <section className="section" style={{ background: '#0d1117', color: '#ffffff' }}>
        <div className="container">
          <p className="section-tag center" style={{ color: '#58a6ff' }}>
            Built for modern engineering
          </p>
          <h2 className="section-title center" style={{ color: '#ffffff' }}>
            Production-grade C# and cloud patterns
          </h2>
          <p className="section-text center narrow" style={{ color: '#8b949e' }}>
            From high-throughput minimal endpoints to Blazor interactive frontends and Azure cloud-native deployments, our workshops bridge theory to production.
          </p>

          <div style={{ maxWidth: '860px', margin: '40px auto 0' }}>
            <div className="terminal-window">
              <div className="terminal-topbar">
                <div className="terminal-dots">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                </div>
                <div className="terminal-tabs">
                  <button
                    className={`terminal-tab ${activeCodeTab === 'minimal-api' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('minimal-api')}
                  >
                    Program.cs (Minimal API)
                  </button>
                  <button
                    className={`terminal-tab ${activeCodeTab === 'blazor' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('blazor')}
                  >
                    LiveRsvp.razor (Blazor)
                  </button>
                  <button
                    className={`terminal-tab ${activeCodeTab === 'ef-core' ? 'active' : ''}`}
                    onClick={() => setActiveCodeTab('ef-core')}
                  >
                    WorkshopService.cs (EF Core)
                  </button>
                </div>
              </div>
              <pre className="terminal-code">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <PhotoBreak
        imageSrc={eventsData.photoBreak.imageSrc}
        tag={eventsData.photoBreak.tag}
        title={eventsData.photoBreak.title}
      />

      {/* Refined Architectural Exploration Grid (Human-Crafted SVGs) */}
      <section className="section page-teaser-section">
        <div className="container">
          <p className="section-tag center">Discover .NET Hub</p>
          <h2 className="section-title center">Explore Kathmandu's Developer Community</h2>
          <p className="section-text center narrow">
            Whether you want to learn cutting-edge cloud patterns, attend our weekend workshops, or mentor the next generation of engineers in Nepal.
          </p>

          <div className="page-teaser-grid">
            <Link to="/events" className="page-teaser-card reveal-up" style={{ '--accent-card': '#2f5670' }}>
              <div className="teaser-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3>Events & Meetups</h3>
              <p>Workshops, local watch parties, and dev days in Kathmandu. Free and open to all.</p>
              <span className="page-teaser-cta">View schedule →</span>
            </Link>

            <Link to="/tech" className="page-teaser-card reveal-up" style={{ '--d': '0.08s', '--accent-card': '#4a7ea3' }}>
              <div className="teaser-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3>Tech Ecosystem</h3>
              <p>Explore modern C#, ASP.NET Core, Blazor, SQL Server, and Microsoft Azure.</p>
              <span className="page-teaser-cta">Explore the stack →</span>
            </Link>

            <Link to="/team" className="page-teaser-card reveal-up" style={{ '--d': '0.16s', '--accent-card': '#5c2d91' }}>
              <div className="teaser-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Leadership & MVPs</h3>
              <p>Organised by senior technical leaders and Microsoft MVPs who build with .NET daily.</p>
              <span className="page-teaser-cta">Meet the team →</span>
            </Link>

            <Link to="/community" className="page-teaser-card reveal-up" style={{ '--d': '0.24s', '--accent-card': '#0078d4' }}>
              <div className="teaser-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>Community Hub</h3>
              <p>Connect across Meetup, LinkedIn, YouTube, and our GitHub open-source repositories.</p>
              <span className="page-teaser-cta">Join discussion →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
