import Image from 'next/image'
import React from 'react'
import styles from './ProductosHomeDown.module.css'

const ProductosHome2 = () => {
    return (
        <div className={styles.containerProductosHome}>
            <div className={`gap-y-20 ${styles.producto1}`}>
                <div className='gap-1'>
                    <h2 className={styles.homeH2}>OceanStor 2220 (32 GB Cache 2.5 Inch SAS)</h2>
                    <p className={`text-gray-400 text-xl ${styles.productOneP}`}>Huawei New-Gen OceanStor 2220 Hybrid Flash Storage System is designed for MSMEs, featuring convenient and efficient data infrastructure. It fully exploits the value of enterprise data, and helps enterprises go digital.</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                </div>
                <Image src="/productos/home/OceanStor-2220.png" className='gap-y-10' width={300} height={300} alt='' />
            </div>
            <div className={styles.columna2}>
                <div className={styles.producto2}>
                    <h5 className={styles.productH5}>OceanStor 2620 (128 GB Cache 3.5 Inch SAS)</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}>Simplified, easy-to-use, and intelligent — Huawei New-Gen OceanStor 2620 Hybrid Flash Storage System is designed for SMEs. It provides convenient and efficient data infrastructure, fully exploits the value of enterprise data, and helps enterprises go digital.</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/OceanStor-2620.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto3}>
                    <h5 className={styles.productH5}></h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}>.</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/no-product.svg" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto4}>
                    <h5 className={styles.productH5}>S220-24P4X</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}>S220-24P4X (24*10/100/1000BASE-T ports(400W PoE+), 4*10GE SFP+ ports, built-in AC power)</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/S220-24P4X.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
                <div className={styles.producto5}>
                    <h5 className={styles.productH5}>AP263</h5>
                    <p className={`text-gray-400 text-sm ${styles.productP}`}>Huawei eKitEngine AP263 is a Wi-Fi 6 (802.11ax) wall plate access point (AP). It can simultaneously provide services on 2.4 GHz (2x2 MIMO) and 5 GHz (2x2 MIMO) frequency bands, achieving a device rate of up to 2.975 Gbps</p>
                    <button className={styles.btnProducts}>More {'>'}</button>
                    <Image src="/productos/home/AP263.png" className='gap-y-10' width={150} height={150} alt='' />
                </div>
            </div>
        </div>
    )
}

export default ProductosHome2