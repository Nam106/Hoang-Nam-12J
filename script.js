function login()
{
  let u = username.value
  let p = pw.value
  if (u=="username" && p=="password")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
