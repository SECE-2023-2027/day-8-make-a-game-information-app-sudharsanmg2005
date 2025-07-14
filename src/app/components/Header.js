'use client';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">IGDB</div>
      <input type="text" placeholder="Search games..." className="search-box" />
    </header>
  );
}
