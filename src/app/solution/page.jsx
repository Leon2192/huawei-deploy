"use client"
import BannerStore from '@/components/shared/Banner/BannerStore'
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

const Solution = () => {
	const [selectedScenario, setSelectedScenario] = useState(null);
	const [activeId, setActiveId] = useState(null);

	const handleClick = (scenario, id) => {
		setSelectedScenario(scenario);
		setActiveId(id);
	};

	useEffect(() => {
		setSelectedScenario(imagesScenario[0].scenario);
		setActiveId(imagesScenario[0].id);
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const imagesSlider = [
		{
			id: 1,
			img: "/banners/banners-solution/sliderFirst.jpg"
		},
		{
			id: 2,
			img: "/banners/banners-solution/sliderSecond.jpg"
		},
	]

	const imagesScenario = useMemo(() => [
		{
			id: 1,
			img: "/imagenes/scenario-images/sme.png",
			title: "SME",
			scenario: [
				{
					title: "HUAWEI ekit SME office scenario solution",
					description: "HUAWEI eKit SME office scenario solution for small- and medium-sized enterprises (SMEs) focuses on network and conference scenarios, helping SMEs build a high-quality, stable, and easy-to-use lightweight smart campus.",
					img: "/imagenes/scenario-images/sme/sme1.jpg"
				},
				{
					title: "SME office collaboration",
					description: "SME office collaboration solution based on HUAWEI idealHub",
					img: "/imagenes/scenario-images/sme/sme2.jpg"
				},
			]
		},
		{
			id: 2,
			img: "/imagenes/scenario-images/chain.png",
			title: "Chain",
			scenario: [
				{
					title: "Commercial Store Collaboration",
					description: "Commercial store collaboration solution based on HUAWEI IdeaHub",
					img: "/imagenes/scenario-images/chain/chain1.jpg"
				},
				{
					title: "Budget Hotel Collaboration",
					description: "Budget hotel collaboration solution based on HUAWEI IdeaHub",
					img: "/imagenes/scenario-images/chain/chain2.jpg"
				},
				{
					title: "HUAWEI eKit Budget hotel scenario solution",
					description: "HUAWEI eKit Budget hotel scenario solution covers check-in, Internet access, team building, and discussion scenarios, meeting diversified sharing and customized requirements of express hotels and ensuring high-quality hotel experience.",
					img: "/imagenes/scenario-images/chain/chain3.jpg"
				},
				{
					title: "Huawei eKit Commercial store scenario solution",
					description: "Commercial stores have problems such as POS card swiping service interruption, unstable network, and advertisement publicize.Huawei eKit Commercial store scenario solution provides customers with high-quality experience assurance in terms of network stability and value-added marketing.",
					img: "/imagenes/scenario-images/chain/chain4.jpg"
				},
			]
		},
		{
			id: 3,
			img: "/imagenes/scenario-images/education.png",
			title: "Education",
			scenario: [
				{
					title: "Classroom collaboration in primary and secondary schools",
					description: "Classroom collaboration in primary and secondary schools based on HUAWEI IdeaHub",
					img: "/imagenes/scenario-images/education/education1.jpg"
				}
			]
		},
		{
			id: 4,
			img: "/imagenes/scenario-images/healthcare.png",
			title: "Healthcare",
		},
		{
			id: 5,
			img: "/imagenes/scenario-images/realEstate.png",
			title: "Real Estate",
		},
		{
			id: 6,
			img: "/imagenes/scenario-images/manufacturing.png",
			title: "Manufacturing",
		},
		{
			id: 7,
			img: "/imagenes/scenario-images/warehouse.png",
			title: "Warehouse",
		},
	], [])

	const truncateText = (text, maxLength = 50) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	};
	return (
		<>
			<div className="bannerPrincipal">
				<BannerStore
					imageUrl="/banners/banners-solution/banner-principal.jpg"
				/>
			</div>
			<h2 className='text-center text-5xl my-16'>Online Showroom</h2>
			<Slider {...settings} className='flex justify-center w-[100%] mx-auto gap-10' centerMode={true}
				centerPadding="10%">
				{imagesSlider.map((item) => (
					<Image src={item.img} key={item.id} alt='' width={1500} height={1500} style={{ display: "flex", gap: "20px" }} />
				))}
			</Slider>
			<div className='container'>
				<h2 className='text-center text-5xl my-16'>Scenario Solution</h2>
				<div className='flex justify-center flex-wrap'>
					{imagesScenario.map((item) => (
						<div
							key={item.id}
							className={`flex text-center justify-center flex-col ${activeId === item.id ? 'border-b-2 border-black' : ''}`}
						>
							<Image
								src={item.img}
								alt=''
								width={150}
								height={150}
								onClick={() => handleClick(item.scenario, item.id)}
								className='transform transition-transform duration-300 hover:scale-110 cursor-pointer'
							/>
							<p>{truncateText(item.title, 20)}</p> {/* Título más corto */}
						</div>
					))}
				</div>
				{selectedScenario && (
					<div className='flex flex-wrap justify-center mt-6'>
						{selectedScenario.map((scenarioItem, index) => (
							<div
								key={index}
								className='relative w-full max-w-xs h-96 m-2 overflow-hidden transform transition-transform duration-500 hover:scale-150 hover:z-50 group'
							>
								<div className='relative w-full h-full'>
									<Image
										src={scenarioItem.img}
										alt={scenarioItem.title}
										layout='fill'
										objectFit='cover'
										className='rounded-lg transition-transform duration-500'
									/>
								</div>
								<div
									className='absolute bottom-0 left-0 p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									style={{
										background: 'linear-gradient(180deg, transparent 41.36%, rgba(0, 0, 0, .4) 81.557%, rgba(0, 0, 0, .84) 99.222%)'
									}}
								>
									<h4 className='text-lg font-semibold'>{truncateText(scenarioItem.title, 30)}</h4>
									<p className='text-sm'>
										{scenarioItem.description}
									</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Solution