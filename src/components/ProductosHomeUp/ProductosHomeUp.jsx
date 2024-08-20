import Image from 'next/image'
import React from 'react'
import styles from './ProductosHomeUp.module.css'

const ProductosHome1 = () => {
    return (
        <div className={styles.containerProductosHome}>
            <div className={`gap-y-20 ${styles.producto1}`}>
                <div className='gap-1'>
                    <h2 className={styles.homeH2}>S220-24T4X</h2>
                    <p className={`text-gray-400 text-xl ${styles.productOneP}`}> S220-24T4X (24*10/100/1000BASE-T ports, 4*10GE SFP+ ports, built-in AC power) </p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                </div>
                <Image src="/productos/home/S220-24T4X.png" className='gap-y-10' width={300} height={300} alt='' />
            </div>
            <div className={styles.columna2}>
                <div className={styles.producto2}>
                    <h5 className={styles.productH5}>AP362</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}> Huawei eKitEngine AP362 is a Wi-Fi 6 (802.11ax) indoor access point (AP). It can simultaneously provide services on 2.4 GHz (2x2 MIMO) and 5 GHz (2x2 MIMO) frequency bands, achieving a device rate of up to 2.975 Gbps </p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/AP362.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto3}>
                    <h5 className={styles.productH5}>IdeaHub B2-75</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}> HUAWEI IdeaHub B2 is the next-generation intelligent meeting panel that delivers HD cloud conferencing. With dual Wi-Fi design and an optical anti-blue light feature, it offers an upgraded projection and writing experience perfect for multiple office environments, including meeting rooms, manager offices, and open office areas.</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/IdeaHub-B2-75.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto4}>
                    <h5 className={styles.productH5}>AP362</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}> Huawei eKitEngine AP362 is a Wi-Fi 6 (802.11ax) indoor access point (AP). It can simultaneously provide services on 2.4 GHz (2x2 MIMO) and 5 GHz (2x2 MIMO) frequency bands, achieving a device rate of up to 2.975 Gbps </p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/OceanStor-2220.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto4}>
                    <h5 className={styles.productH5}>AP362</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}> Huawei eKitEngine AP362 is a Wi-Fi 6 (802.11ax) indoor access point (AP). It can simultaneously provide services on 2.4 GHz (2x2 MIMO) and 5 GHz (2x2 MIMO) frequency bands, achieving a device rate of up to 2.975 Gbps </p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/OceanStor-2620.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
            </div>
        </div>
    )
}

export default ProductosHome1