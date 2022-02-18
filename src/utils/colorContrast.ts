const colorContrast = (hexcolor: string) => {
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1)
  }
  const r = parseInt(hexcolor.substr(0, 2), 16)
  const g = parseInt(hexcolor.substr(2, 2), 16)
  const b = parseInt(hexcolor.substr(4, 2), 16)
  const bright = (r * 299 + g * 587 + b * 114) / 1000

  return bright >= 158
}

export default colorContrast
