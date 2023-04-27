const qrcode = require('qrcode');

                    app.post('/vaxin', async (req, res) => {
                        const hoten = req.body.hoten;
                        const mssv = req.body.mssv;
                        const somuitiem = req.body.somuitiem;
                        let result = `Họ và tên: ${hoten}\nMSSV: ${mssv}\nSố mũi vaxin Covid 19 đã tiêm: ${somuitiem}`;
                        let img = '';
                        let qr = await qrcode.toDataURL(result);
                        //  console.log(qr);
                        img = `<image src= " ` + qr + `" />`;
                        return res.send(img);
                    });
