const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "personal",
                name: "admin-personal",
                component: () => import("../pages/admin/personal/index.vue")
            }
        ]
    }
]

export default admin;