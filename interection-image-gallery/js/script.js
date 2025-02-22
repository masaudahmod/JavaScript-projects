document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');

    // Example gallery items
    // const items = [
    //     './../images/image (1).jpg',
    //     './../images/image (2).jpg',
    //     './../images/image (3).jpg',
    //     './../images/image (4).jpg',
    //     './../images/image (5).jpg',
    //     './../images/image (6).jpg',
    //     './../images/image (7).jpg',
    //     './../images/image (8).jpg',
    //     './../images/image (9).jpg',
    //     './../images/image (10).jpg'
    // ];

    const items = [
        'https://images.unsplash.com/photo-1736177843409-73956dc1c810?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85",
        'https://images.unsplash.com/photo-1738763152661-afa76849e75b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1739609439850-2eace0b03218?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1736177843409-73956dc1c810?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85",
        'https://images.unsplash.com/photo-1738763152661-afa76849e75b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1739609439850-2eace0b03218?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1739826155350-db63e78c098c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85',
        'https://images.unsplash.com/photo-1739715640692-22ef6a326271?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNTMwMzF8&ixlib=rb-4.0.3&q=85'
    ];

    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = item;
        img.alt = 'Gallery Image';
        div.appendChild(img);

        gallery.appendChild(div);
    });
});
