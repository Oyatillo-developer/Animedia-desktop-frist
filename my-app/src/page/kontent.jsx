import '../style/kontent.scss'
import React, { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import kaisen from '../img/onepice.jpg';

function Kontent() {
    // Boshlang‘ich postlar
    const initialPosts = [
        { id: 1, title: "Qayta tugulgan aristakrat nimadur nimadur", content: "Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 2, title: "Ikkinchi Post", content: "Bu ikkinchi postning tavsifi", image: kaisen, image: kaisen, sezon: "2", seria: 16,},
        { id: 3, title: "Uchinchi Post", content: "Bu uchunchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 4, title: "Tortinchi Post", content: "Bu tortinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 5, title: "Qayta tugulgan aristakrat nimadur nimadur", content: "Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 6, title: "Ikkinchi Post", content: "Bu ikkinchi postning tavsifi", image: kaisen, image: kaisen, sezon: "2", seria: 16,},
        { id: 7, title: "Uchinchi Post", content: "Bu uchunchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 8, title: "Tortinchi Post", content: "Bu tortinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 9, title: "Qayta tugulgan aristakrat nimadur nimadur", content: "Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi Bu postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 10, title: "Ikkinchi Post", content: "Bu ikkinchi postning tavsifi", image: kaisen, image: kaisen, sezon: "2", seria: 16,},
        { id: 11, title: "Uchinchi Post", content: "Bu uchunchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 12, title: "Tortinchi Post", content: "Bu tortinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
    ];

    // Yangi postlar qo'shish uchun
    const newPosts = [
        { id: 13, title: "Beshinchi Post", content: "Bu beshinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 14, title: "Oltinchi Post", content: "Bu oltinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 15, title: "Yettinchi Post", content: "Bu yettinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, },
        { id: 16, title: "Sakkizinchi Post", content: "Bu sakkizinchi postning tavsifi", image: kaisen, sezon: "2", seria: 16, }
    ];

    // State: Postlar ro‘yxatini saqlaydi
    const [posts, setPosts] = useState(initialPosts);

    // Yangi postlarni qo‘shish funksiyasi
    const more = () => {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
    };

    return (
        <div className="terminal">
            <div className="janr">
                <div className="map">
                    <button>Hamma Animelar</button>
                    <button>Ongoing</button>
                    <button>Yakunlangan Animelar</button>
                    <button>Anime Filmlar</button>
                </div>
                <button>
                    Barchasi <IoChevronForwardSharp size={14} />
                </button>
            </div>

            <div className="grid">
                {posts.map(post => (
                    <div
                        className="public"
                        key={post.id}
                        style={{ backgroundImage: `url(${post.image})` }}
                    >
                        <a href=""></a>

                        <div className="box">

                            <div className="yil">
                                <h1>2024</h1>
                            </div>

                            <div className="qism">
                                <h1>2</h1>
                                <h1>-24</h1>
                            </div>

                            <button>
                                <FaRegHeart size={24}/>
                            </button>
                        </div>

                        <div className="title">
                            <h1>{post.title}</h1>
                            <div className="sezon">
                                <h3>{post.sezon} sezon  </h3>
                                <h3>{post.seria} seria</h3>
                            </div>
                            <p>{post.content}</p>
                            <a href=""></a>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={more}>Ko'proq ko'rsatish</button>
        </div>
    );
}

export default Kontent;
