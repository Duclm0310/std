var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
})



// router.post('/', async (req, res) => {
//   //lấy thông tin từ form login
//   var username = req.body.username;
//   var password = req.body.password;
//   console.log(username, password);
//   //lấy dữ liệu user từ db
//   var users = await UserModel.find();
//   console.log(users)
//   //tạo biến boolean để check login
//   var login = false;
//   //chạy vòng lặp for để kiểm tra thông tin login
//   //có match với dữ liệu của bảng user trong db không
//   for (let i = 0; i < users.length; i++) {
//     if (username == users[i].username && password == users[i].password) {
//       login = true;
//       break;
//     }
//   }
//   console.log(login);
//   //điều hướng web khi login succeed (vào trang admin) hoặc login fail (về lại trang login)
//   if (login)  //login == true
//     res.redirect('/students')
//   else
//     res.redirect('/');
//   // console.log();
// })

module.exports = router;