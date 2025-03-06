export default function Header() {
  return (
    <header className="flex items-center px-6 py-0 h-20 bg-white  max-sm:px-4 max-sm:py-0">
      <div className="w-28 h-8">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="16" cy="16" r="16" fill="#030712"></circle> <text fill="#030712" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="16" letter-spacing="0em"><tspan x="39" y="21.6">Enthread</tspan></text> </svg>',
          }}
        />
      </div>
    </header>
  );
}
