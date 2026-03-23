// Dream Data — shared sidebar builder
// Usage: sidebarHTML('hotel', 'dashboard') or sidebarHTML('hotel', 'events')

function buildSidebar(type, activePage) {
  const hotelNav = [
    { id:'dashboard', label:'Dashboard', href:'hotel-dashboard.html', icon:'<rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/>' },
    { id:'events', label:'Events', href:'events.html', badge:'12', icon:'<rect x="1.5" y="2.5" width="13" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M5 1v3M11 1v3M1.5 7h13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' },
    { id:'clients', label:'Clients', href:'clients.html', icon:'<circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M2 14c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' },
    { id:'reports', label:'Reports', href:'reports.html', icon:'<path d="M2 12l3.5-4 3 3 3.5-5 3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' },
    { id:'alerts', label:'Alerts', href:'alerts.html', badge:'3', badgeRed:true, icon:'<path d="M8 2A5.5 5.5 0 0113.5 7.5c0 3.5-1 5.5-2 6.5H4.5c-1-1-2-3-2-6.5A5.5 5.5 0 018 2z" stroke="currentColor" stroke-width="1.3"/><path d="M6 14v.5a2 2 0 004 0V14" stroke="currentColor" stroke-width="1.2"/>' },
    { id:'settings', label:'Settings', href:'settings.html', icon:'<circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M2.9 13.1l1.4-1.4M11.7 4.3l1.4-1.4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' },
  ];
  const clientNav = [
    { id:'dashboard', label:'My Event', href:'client-dashboard.html', icon:'<rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/><rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity=".8"/>' },
    { id:'timeline', label:'Timeline', href:'client-dashboard.html#timeline', icon:'<path d="M3 4h10M3 8h7M3 12h9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' },
    { id:'roomblock', label:'Room Block', href:'client-dashboard.html#rooms', icon:'<path d="M2 12V6l6-4 6 4v6l-6 3-6-3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>' },
    { id:'fb', label:'Food & Beverage', href:'client-dashboard.html#fb', icon:'<circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3"/><path d="M5 8h6M8 5v6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>' },
    { id:'documents', label:'Documents', href:'client-dashboard.html#docs', icon:'<rect x="3" y="1.5" width="10" height="13" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>' },
    { id:'messages', label:'Messages', href:'client-dashboard.html#messages', badge:'2', badgeRed:true, icon:'<path d="M13.5 2.5H2.5a1 1 0 00-1 1v7a1 1 0 001 1H5l3 2.5 3-2.5h2.5a1 1 0 001-1v-7a1 1 0 00-1-1z" stroke="currentColor" stroke-width="1.3"/>' },
  ];
  const nav = type === 'client' ? clientNav : hotelNav;
  const userName = type === 'client' ? 'Sarah Wu' : 'Jamie Mills';
  const userRole = type === 'client' ? 'Event Planner' : 'Event Manager';
  const userInitials = type === 'client' ? 'SW' : 'JM';
  const avatarColor = type === 'client' ? '#B08A57' : '#3F5B73';

  return `
    <div class="sb-logo">
      <a href="index.html" style="text-decoration:none"><div class="sb-logo-mark">
        <div class="logo-icon">
          <svg viewBox="0 0 22 22" fill="none"><path d="M3 6h16M3 11h10M3 16h13" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
        <div>
          <div class="logo-text">Dream Data</div>
          ${type === 'client' ? '<div class="logo-sub">Event Portal</div>' : '<div class="logo-sub">Hotel Workspace</div>'}
        </div>
      </div>
    </div>
    <div class="sb-section">
      ${nav.map(item => `
        <a class="sb-item ${item.id === activePage ? 'active' : ''}" href="${item.href}">
          <svg viewBox="0 0 16 16" fill="none" width="16" height="16">${item.icon}</svg>
          ${item.label}
          ${item.badge ? `<span class="sb-badge ${item.badgeRed ? 'red' : ''}">${item.badge}</span>` : ''}
        </a>
      `).join('')}
    </div>
    <div class="sb-spacer"></div>
    <div class="sb-bottom">
      <a class="sb-item" href="login.html">
        <svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M10 2h3a1 1 0 011 1v10a1 1 0 01-1 1h-3M7 11l4-3-4-3M2 8h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Sign Out
      </a>
      <div class="sb-user">
        <div class="sb-avatar" style="background:${avatarColor}">${userInitials}</div>
        <div>
          <div class="sb-uname">${userName}</div>
          <div class="sb-urole">${userRole}</div>
        </div>
      </div>
    </div>
  `;
}
