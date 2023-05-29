export default function ({ app, route, redirect }) {
  if (route.path !== '/auth/signin' && route.path !== '/auth/signup') {
    // Ми на захищеному маршруті
    if (!app.$fire.auth.currentUser) {
      // Перенаправляємо на сторінку входу
      return redirect('/auth/signin')
    }
  } else if (route.path === '/auth/signin') {
    if (!app.$fire.auth.currentUser) {
      // Залишаємо на сторінці входу
    } else {
      return redirect('/')
    }
  }
}
