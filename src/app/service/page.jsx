import React from 'react';
import data from "@/constants/serviceCards.json";
import {
    SearchIcon,
    SupportIcon,
    StatusIcon,
    RmaStatusIcon,
    ServiceRequestIcon,
    DOAStatusIcon,
    WarrantyPolicyIcon,
    MaintenanceIcon,
    ProductLyfeCycleIcon,
    DataCommunicationIcon,
    OpticalIcon,
    DataStorageIcon,
    CollaborationIcon,
    BulletinsIcon,
    SecurityIcon,
    ServiceBulletinsIcon
} from "@/utilities/icons/heroIcons";
import ServiceCard from '@/components/shared/ServiceCard/ServiceCard';
import Image from 'next/image';
import BannerStore from './../../components/shared/Banner/BannerStore';

const iconMap = {
    support: SupportIcon,
    maintenancestatus: StatusIcon,
    rma: RmaStatusIcon,
    service: ServiceRequestIcon,
    doa: DOAStatusIcon,
    warranty: WarrantyPolicyIcon,
    maintenancecard: MaintenanceIcon,
    lifecycle: ProductLyfeCycleIcon,
    data: DataCommunicationIcon,
    optical: OpticalIcon,
    storage: DataStorageIcon,
    collaboration: CollaborationIcon,
    productbulletins: BulletinsIcon,
    securitybulletins: SecurityIcon,
    servicebulletins: ServiceBulletinsIcon
};

const Page = () => {
    return (
        <>
            <BannerStore
                imageUrl="/slider/slide5.jpg"
            />
            <div className="bg-gray-100">
                <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold text-center mb-8">Digital Service Tools</h1>
                    <div className="flex flex-wrap -m-4">
                        {data.Services.map(card => (
                            <div key={card.id} className="w-full sm:w-1/2 md:w-1/4 p-4">
                                <ServiceCard
                                    icon={iconMap[card.icon] || SearchIcon}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold text-center mb-8">Documentation</h1>
                    <div className="flex flex-wrap -m-4">
                        {data.Documentation.map(card => (
                            <div key={card.id} className="w-full sm:w-1/2 md:w-1/4 p-4">
                                <ServiceCard
                                    icon={iconMap[card.icon] || SearchIcon}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto p-6 bg-cover bg-center" style={{ backgroundImage: "url('/banners/banners-service/bg-bannerservice.png')" }}>
                    <h1 className="text-3xl font-bold text-center mb-8">Bulletins</h1>
                    <div className="flex flex-wrap justify-center -m-4">
                        {data.Bulletins.map(card => (
                            <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <ServiceCard
                                    icon={iconMap[card.icon] || SearchIcon}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    layout="horizontal"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto p-6 mt-12">
                    <h1 className="text-3xl font-bold text-center mb-8">Cloud Platform</h1>
                    <div className="flex flex-col sm:flex-row justify-between gap-8">
                        <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-1/2">
                            <div className="relative h-48">
                                <Image
                                    src="/imagenes/service-card1.png"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    alt="Service Card 1"
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="text-2xl font-bold text-center mb-2">DME IQ Intelligent Cloud O&M Platform</h1>
                                <h2 className="text-lg text-gray-500 text-center">DME IQ Intelligent Cloud O&M Platform, Combining big data analytics and Artificial Intelligence (AI), Huawei DME IQ provides data infrastructure— such as Huawei servers and storage devices — with automatic fault reporting, and problem management and tracking.</h2>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-1/2">
                            <div className="relative h-48">
                                <Image
                                    src="/imagenes/service-card2.png"
                                    alt="Image 2"
                                    layout="fill"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="text-2xl font-bold text-center mb-2">IdeaManager Unified Endpoint Management Solution</h1>
                                <h2 className="text-lg text-gray-500 text-center">A unified management and O&M platform for Huawei intelligent collaboration devices, providing configuration delivery, resource monitoring, and bulletin board, to help you manage all your devices, all of the time.</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Page;
