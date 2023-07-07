function loadWorks() {
    const worksContainer = document.getElementById('workContainer');
    const works = [
        {
            imgSrc:'../images/work1.png',
            header:'Designing Dashboards',
            date:2020,
            name:'Dashboard',
            content:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            imgSrc:'../images/work2.png',
            header:'Vibrant Portraits of 2020',
            date:2018,
            name:'Illustrations',
            content:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            imgSrc:'../images/work3.png',
            header:'36 Days of Malayalam type',
            date:2020,
            name:'Typography',
            content:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            imgSrc:'../images/work4.png',
            header:'Components',
            date:2020,
            name:'Components, Design',
            content:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ];

    works.forEach((obj) => {
        worksContainer.innerHTML += `
        <div>
            <img src="${obj.imgSrc}" alt="work 1">
            </div>
            <div>
                <h3 class="no-margin">${obj.header}</h3>
                <div class="flex start_center mobile-center-center gap-1em">
                    <div class="chip font-12">${obj.date}</div>
                    <p class="light-grey">${obj.name}</p>
                </div>
                <p>${obj.content}</p>
            </div>
        `
    });
}

function toggleMenu(action) {
    document.getElementById('mobileMenu').style.display = (action == 'open') ? 'block' : 'none';
}