import { DataList } from './dataList.js';

const cards = document.querySelector('#cards');
// const filterLaptop = document.querySelector('#filter-laptop');

window.addEventListener('load', () => {
	DataList.map((data) => {
		cards.innerHTML += `
        <div class="item-card">
		    <a href="./pages/description.html">
                <img src="${data.srcImage}" alt="${data.title}"/>    
            </a>
			<div class="card-description">
				<h3>${data.title}</h3>
				<div>
					<p>${data.oldPrice}</p>
					<span>${data.price}</span>
				</div>
			</div>
		</div>
        `;
	});
});

// filterLaptop.addEventListener('click', () => {
// 	const laptops = DataList.filter((data) => data.type == 'laptop');

// 	laptops.map((laptop) => {
// 		cards.innerHTML += `
//         <div class="item-card">
// 		    <a href="./pages/description.html">
//                 <img src="${laptop.srcImage}" alt="${laptop.title}"/>
//             </a>
// 			<div class="card-description">
// 				<h3>${laptop.title}</h3>
// 				<div>
// 					<p>${laptop.oldPrice}</p>
// 					<span>${laptop.price}</span>
// 				</div>
// 			</div>
// 		</div>
//         `;
// 	});
// });
