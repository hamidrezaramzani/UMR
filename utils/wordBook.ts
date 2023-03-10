type WordBookType = {
    [key: string]: any
}
const wordBook: WordBookType = {
    fields: {
        admin: {
            auth: {
                username: "نام کاربری",
                password: "رمز عبور",
            }
        }
    },
    pages: {
        home: {
            title: "سامانه رزرو غذای دانشجویی",
            description: "سامانه رزرو غذای دانشجویی | رزرو غذای دانشجویی"
        },
        adminAuth: {
            title: "ورود به پنل ادمین",
            description: "ورود به پنل ادمین جهت مدیریت اطلاعات وبسایت"
        }
    }
}

export default wordBook;