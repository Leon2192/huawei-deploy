import React from 'react'
import styles from './containerHome.module.css'
import Image from 'next/image'
import { Button } from './ui/button'
import ProductosHome1 from './ProductosHomeUp/ProductosHomeUp'
import ProductosHome2 from './ProductosHomeDown/ProductosHomeDown'
import SliderLastestNews from './SliderLastestNews/SliderLastestNews'

const containerHome = () => {
	return (
		<div className={`h-[100%] mx-auto`}>
			<div className={styles.container}>
				<div className='text-center mb-10'>
					<h2 className={styles.title}>HUAWEI eKit Selection</h2>
					<div className="container flex flex-col gap-5">
						<div className={styles.imageContainer}>
							<Image src="/banners/banners-home/banner-home1.jpg" width={1200} height={1200} alt="" className={`${styles.imgUp} w-[100%]`} />
							<div className={styles.imageText}>
								<h2 className={`${styles.homeH2} font-medium`}>eKitEngine S380-S8P2T</h2>
								<p className={styles.parrafos}> Multi-Service Gateway | Number of managed Aps: 64 | Maximum user: 250 | Switching Capacity: 16Gbps | Packet forwarding rate: Upload:500 Kpps, download:420 Kpps | Egress bandwidth: 2Gbps | 2 x 10/100/1000BASE-T ports(WAN),8 x 10/100/1000BASE-T ports(LAN) | PoE+ </p>
								<Button className={styles.btnMore}>More</Button>
							</div>
						</div>
						<ProductosHome1 />
					</div>
				</div>
				<div className='text-center mb-20'>
					<h2 className={styles.title}>Recently Released</h2>
					<div className="container flex flex-col gap-5">
						<div className={styles.imageContainer}>
							<Image src="/banners/banners-home/IdeaHub-S2-75.jpg" width={1200} height={1200} alt="" className={`${styles.imgDown} w-[100%]`} />
							<div className={styles.imageText}>
								<h2 className={`${styles.homeH2} font-medium`}>IdeaHub S2-75</h2>
								<p className={styles.parrafos}>Built on the next-gen hardware platform architecture, HUAWEI IdeaHub S2 is equipped with Bring Your Own Meeting (BYOM), HD immersive meeting quality, Wi-Fi 6 for direct projection, and ultra-low writing latency, easily adapting to mainstream cloud meeting apps. It is a perfect solution for boundless collaboration and communication to fit in any room, such as regular meeting rooms, executive offices, and open office areas.</p>
								<Button className={styles.btnMore}>More</Button>
							</div>
						</div>
						<ProductosHome2 />
					</div>
				</div>
				<SliderLastestNews />
			</div>
		</div>
	)
}

export default containerHome