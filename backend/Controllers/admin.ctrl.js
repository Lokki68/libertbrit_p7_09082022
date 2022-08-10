const db = require('../models');

const User = db.users;
const Admin = db.admins;

exports.getAll = (req, res) => {
  Admin.findAll()
    .then((admins) => {
      const msg = 'Admins found';
      res.json({status: 200, msg, admins });
    })
    .catch((err) => res.json({status: 500, err: err.message }));
};

exports.passAdmin = (req, res) => {
  const userId = req.params.id;
  const username = req.body.username;

  Admin.findOne({
    where: { username },
  })
    .then((adminList) => {
      if (adminList === null) {
        const newAdmin = {
          username,
          userId,
        };

        Admin.create(newAdmin)
          .then((data) => {
            const userAdmin = {
              admin: data.id,
            };
            User.update(userAdmin, {
              where: { id: userId },
            })
              .then(() => {
                console.log('Success');
              })
              .catch((err) => res.json({status: 403, err: err.message }));
            const msg = 'New Admin was created successfully';
            res.json({status: 200, msg, data });
          })
          .catch((err) => res.json({status: 400, err: err.message }));
      } else {
        const msg = 'Admin as already exists';
        res.json({status: 401, msg });
      }
    })
    .catch((err) => res.json({status: 500, err: err.message }));

};

exports.deleteAdmin = (req, res) => {
  const id = req.params.id;

  Admin.findByPk(id).then((data) => {
    if (!data) return res.json({status: 404, msg: 'Admin not found' });

    const updateAdmin = {
      admin: 0,
    };

    User.update(updateAdmin, {
      where: { username: data.username },
    });
    return Admin.destroy({
      where: { id: data.id },
    })
      .then((data) => {
        res.json({status: 200, msg: 'admin deleted', data });
      })
      .catch((err) => res.json({status: 500, err: err.message }));

  });
};
