function Navigation({ children }) {
  return (
    <div>
      <h1>Peppers Alberta</h1>
      <nav>
        <ul className="flex gap-1">
          <li className="">Home</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  )
}

export { Navigation }