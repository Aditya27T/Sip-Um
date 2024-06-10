import { comment } from "postcss";

export const initialData = [
    {
        id: 1, namaUser: "User 1", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Laptop Dell XPS 13", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "kehilangan", vote: 0, comment: 0,
        createdAt: "2023-11-15 10:21:37.261134+01:00", updatedAt: "2024-03-12 18:30:45.261134+01:00"
    },
    {
        id: 2, namaUser: "User 2", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "Keyboard Mechanical", deskripsi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua csscccscscscscscscscscs  dd dsddsd sdsdsds dds sdsdssdsdsdsdsdsds sds dd sd sdsdsds  dnwdwjdw dnwjdwj dwd wd wjd wjd wj dwj dwj dwjd wh ddb whbddb whbdwhbdwbdhw dwh dwhd wdwh d wh sjd wjdwjdbwdbwdbwhdb.",
        type: "kerusakan", vote: 5, comment: 2,
        createdAt: "2022-06-27 14:43:37.261134+01:00", updatedAt: "2023-05-09 19:47:23.261134+01:00"
    },
    {
        id: 3, namaUser: "User 3", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Mouse Wireless", deskripsi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        type: "kehilangan", vote: 10, comment: 5,
        createdAt: "2021-08-11 08:12:37.261134+01:00", updatedAt: "2022-10-25 16:18:54.261134+01:00"
    },
    {
        id: 4, namaUser: "User 4", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "Monitor 4K", deskripsi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        type: "kerusakan", vote: 20, comment: 10,
        createdAt: "2020-12-30 12:25:37.261134+01:00", updatedAt: "2021-04-19 11:33:48.261134+01:00"
    },
    {
        id: 5, namaUser: "User 5", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Printer Laser", deskripsi: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "kehilangan", vote: 13, comment: 7,
        createdAt: "2022-09-09 07:35:37.261134+01:00", updatedAt: "2023-11-22 20:21:37.261134+01:00"
    },
    {
        id: 6, namaUser: "User 6", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "Smartphone", deskripsi: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        type: "kerusakan", vote: 7, comment: 3,
        createdAt: "2021-07-04 15:48:37.261134+01:00", updatedAt: "2023-01-29 10:54:23.261134+01:00"
    },
    {
        id: 7, namaUser: "User 7", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Tablet", deskripsi: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        type: "kehilangan", vote: 3, comment: 1,
        createdAt: "2020-04-13 17:02:37.261134+01:00", updatedAt: "2021-08-14 13:47:11.261134+01:00"
    },
    {
        id: 8, namaUser: "User 8", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "Headphones", deskripsi: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        type: "kerusakan", vote: 15, comment: 6,
        createdAt: "2023-03-21 19:13:37.261134+01:00", updatedAt: "2023-12-01 09:32:45.261134+01:00"
    },
    {
        id: 9, namaUser: "User 9", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Webcam", deskripsi: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        type: "kehilangan", vote: 2, comment: 23,
        createdAt: "2021-11-19 11:53:37.261134+01:00", updatedAt: "2022-02-07 14:27:29.261134+01:00"
    },
    {
        id: 10, namaUser: "User 10", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "Microphone", deskripsi: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        type: "kerusakan", vote: 8, comment: 12,
        createdAt: "2020-10-08 05:43:37.261134+01:00", updatedAt: "2021-03-17 08:11:52.261134+01:00"
    },
    {
        id: 11, namaUser: "User 11", status: "Pending", thumbnail: "/assets/images/thumbnail_1.jpg",
        namaBarang: "Router", deskripsi: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        type: "kehilangan", vote: 54, comment: 8,
        createdAt: "2022-01-28 20:34:37.261134+01:00", updatedAt: "2023-06-15 12:45:21.261134+01:00"
    },
    {
        id: 12, namaUser: "User 12", status: "Clear", thumbnail: "/assets/images/thumbnail_2.jpg",
        namaBarang: "External Hard Drive", deskripsi: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        type: "kerusakan", vote: 92, comment: 20,
        createdAt: "2020-05-06 13:18:37.261134+01:00", updatedAt: "2022-07-27 15:23:34.261134+01:00"
    }
]