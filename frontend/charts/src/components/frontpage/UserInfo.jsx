export default function UserInfo() {
  return (
    <section className="mb-5">
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<svg width="220" height="40" viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#BEDBFF"></circle><text fill="#030712" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="16" y="25.6">J</tspan></text><text fill="#030712" xml:space="preserve" style="white-space: pre" font-family="Noto Sans CJK TC" font-size="16" letter-spacing="0em"><tspan x="48" y="26.72">James Fok</tspan></text></svg>',
        }}
      />
      <h1 className="mt-3 text-2xl font-bold text-gray-950">
        已連續發文兩天，加油！🔥
      </h1>
    </section>
  );
}
