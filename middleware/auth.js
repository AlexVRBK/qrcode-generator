// export default function ({ app, route, redirect }) {
//   if (route.path !== '/auth/signin' && route.path !== '/auth/signup') {
//     // Ми на захищеному маршруті
//     if (!app.$fire.auth.currentUser) {
//       // Перенаправляємо на сторінку входу
//       return redirect('/auth/signin')
//     }
//   } else if (route.path === '/auth/signin') {
//     if (!app.$fire.auth.currentUser) {
//       // Залишаємо на сторінці входу
//     } else {
//       return redirect('/')
//     }
//   }
// }


export default function ({ app, route, redirect }) {
  const requiresAuth = ['/profile', '/social']; // Список шляхів, які потребують авторизації

  if (!app.$fire.auth.currentUser && requiresAuth.includes(route.path)) {
    // Користувач не авторизований і шлях потребує авторизації
    return redirect('/auth/signin'); // Перенаправляємо на сторінку входу
  }
}
