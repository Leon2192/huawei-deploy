import React from 'react'
import BannerStore from '../../components/shared/Banner/BannerStore'
import BannerStoreSecond from '../../components/shared/Banner/BannerStoreSecond'
import ProductList from "@/components/shared/ProductList/ProductList"
import FlexStore from "@/components/shared/FlexStore/FlexStore"

const page = () => {
    return (
        <div>
            <BannerStore
                imageUrl="/imagenes/banner-store.jpg"
                leftTitle="HUAWEI IdeaHub B2 New Style Smart Office"
                leftSubtitle="HD cloud meeting | Intelligent Whiteboard | Enterpise-class security"
                leftButtonText="View now"
            />

            <FlexStore />
            <BannerStoreSecond
                imageUrl="/imagenes/bannerstore-second.png"
                leftTitle="Embark on an easy shopping journey"
                leftSubtitle="Cohesion and intelligence, Sail a long journey"
                leftButtonText="Start the journey"
            />

            <ProductList />
        </div>
    )
}

export default page