const express = require('express');
const router = express.Router();
const connect = require("../config/sqlConfig");

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.post('/admin/login', (req, res) => {
    const { username } = req.body;

    // console.log(req.body.username, req.body.password);
    connect.query(`SELECT user_name, user_admin, user_access, user_avatar FROM tbl_user WHERE user_name = "${username}"`, function (error, results) {

        if (error) {
            res.status(444).json({message: 'failure', status: `can't retrieve user`});
            throw error;
        }
        res.status(200).json(results);
    });
})

router.get('/admin/getusers', (req, res) => {
    connect.query('SELECT user_name, user_admin, user_access, user_avatar FROM tbl_user', function (error, results) {

        if (error) {
            res.status(444).json({message: 'failure', status: `can't retrieve users`});
            throw error;
        }

        res.status(200).json(results);
    });
})

module.exports = router;