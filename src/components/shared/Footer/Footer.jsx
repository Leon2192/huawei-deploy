import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="flex justify-center mt-8">
                <div className="w-9/12 border-t border-gray-500"></div>
            </div>
            <footer className="bg-white text-black py-8 px-4 mt-8 mb-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Huawei</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Introduction to Huawei</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Huawei Enterprise Business</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">About Huawei eKit</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Global Branches</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Huawei News</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Partners</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Partner Enablement</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Partner Policy</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Resources</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Technology Community</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Documentation Center</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Video Center</p>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Marketing Activities</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Success Stories</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Connect</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Huawei Group</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p className="hover:underline text-gray-500">Huawei Enterprise Business</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Huawei eKit App</h2>
                        <Image
                            src="/brand/qr.jpg"
                            alt="QR"
                            width={150}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="w-9/12 border-t border-gray-500"></div>
                </div>

                <div className="text-center mt-4">
                    <Link href="#">
                        <p className="hover:underline">
                            Copyright © Huawei Technologies Co., Ltd. 1998-2024 All Rights Reserved.
                        </p>
                    </Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;
