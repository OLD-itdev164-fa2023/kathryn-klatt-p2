import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <img
        alt="Bestcom Logo"
        height={100}
        style={{ margin: 0 }}
        src="https://images.ctfassets.net/y8mz9gdf2vff/1XrdEUAXtQCkZdh833d3uQ/48a578cb47a40eb52061a41b47145874/logo.png"
      />
    </Link>
  </header>
)

export default Header
