import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Button, Navbar, NavbarCollapse, NavbarLink, TextInput } from 'flowbite-react';

const Header = () => {
    const path = useLocation().pathname;
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <Navbar className='border-b-2'>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white mr-auto'>
                <span className='px-2 py-1 bg-gradient-to-r from bg-pink-600 via-purple-500 to from-indigo-600 text-transparent bg-clip-text'>WeddingWise</span>
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search the Vendor Company or Name...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden text-dark' gradientMonochrome="cyan" outline pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-5 order-2 ml-auto'>
                <Link to='/Signin'>
                    <Button gradientMonochrome="cyan" outline>SignIn</Button>
                </Link>
                <Button className='w-12 h-10 hidden sm:inline' gradientMonochrome="cyan" outline pill>
                    <FaMoon />
                </Button>
                <Navbar.Toggle />
            </div>
            <NavbarCollapse>
                <div className='flex flex-col lg:flex-row'>
                    <div
                        className={`relative group ${hoveredItem && hoveredItem !== 'PlanningTool' ? 'hidden' : ''}`}
                        onMouseEnter={() => handleMouseEnter('PlanningTool')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link active={path === '/PlanningTool'} as={'div'}>
                            <Link to='/PlanningTool'>PlanningTool</Link>
                        </Navbar.Link>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col mt-2 bg-white shadow-lg">
                            <Link to='/PlanningTool/Budget' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Budget</Link>
                            <Link to='/PlanningTool/Outdoor' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Outdoor Venues</Link>
                            <Link to='/PlanningTool/Destination' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Destination Venues</Link>
                        </div>
                    </div>
                    <div
                        className={`relative group ${hoveredItem && hoveredItem !== 'WeddingVendor' ? 'hidden' : ''}`}
                        onMouseEnter={() => handleMouseEnter('WeddingVendor')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link active={path === '/WeddingVendor'} as={'div'}>
                            <Link to='/WeddingVendor'>WeddingVendor</Link>
                        </Navbar.Link>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col mt-2 bg-white shadow-lg">
                            <Link to='/WeddingVendor/WeddingPhotographers' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wedding Photographers</Link>
                            <Link to='/WeddingVendor/WeddingVideographers' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wedding Videographers</Link>
                            <Link to='/WeddingVendor/WeddingPlanners' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wedding Planners</Link>
                            <Link to='/WeddingVendor/Caterers' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Caterers</Link>
                        </div>
                    </div>
                    <div
                        className={`relative group ${hoveredItem && hoveredItem !== 'WeddingVenue' ? 'hidden' : ''}`}
                        onMouseEnter={() => handleMouseEnter('WeddingVenue')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link active={path === '/WeddingVenue'} as={'div'}>
                            <Link to='/WeddingVenue'>WeddingVenue</Link>
                        </Navbar.Link>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col mt-2 bg-white shadow-lg">
                            <Link to='/WeddingVenue/Indoor' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Banquet Halls</Link>
                            <Link to='/WeddingVenue/Outdoor' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wedding Resorts</Link>
                            <Link to='/WeddingVenue/Destination' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kalyana Mandapams</Link>
                        </div>
                    </div>
                    <div
                        className={`relative group ${hoveredItem && hoveredItem !== 'Bride' ? 'hidden' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Bride')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link active={path === '/Bride'} as={'div'}>
                            <Link to='/Bride'>Bride</Link>
                        </Navbar.Link>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col mt-2 bg-white shadow-lg">
                            <Link to='/Bride/MehndiArtists' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mehndi Artists</Link>
                            <Link to='/Bride/BridalMakeupArtists' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bridal Makeup Artists</Link>
                            <Link to='/Bride/BridalJewellery' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bridal Jewellery</Link>
                        </div>
                    </div>
                    <div
                        className={`relative group ${hoveredItem && hoveredItem !== 'Groom' ? 'hidden' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Groom')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Navbar.Link active={path === '/Groom'} as={'div'}>
                            <Link to='/Groom'>Groom</Link>
                        </Navbar.Link>
                        <div className="absolute left-0 top-full hidden group-hover:flex flex-col mt-2 bg-white shadow-lg">
                            <Link to='/Groom/Sherwani' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sherwani</Link>
                            <Link to='/Groom/GroomMakeupArtists' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Groom Makeup Artists</Link>
                        </div>
                    </div>
                </div>
            </NavbarCollapse>
        </Navbar>
    );
};

export default Header;
