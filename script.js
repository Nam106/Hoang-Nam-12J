function login()
{
  let u = username.value
  let p = pw.value
  if (u=="username" && p=="password")
  {
    window.open("DanhMucBT.html")
    document.getElementById(compiler).style.display="block"
  }
}
