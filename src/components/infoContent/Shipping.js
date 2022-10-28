const Shipping = () => {
    return (
        <section className='bg-[#f4f4f4] text-gray-800 w-full flex flex-col gap-y-9 px-5 py-10'>
            <h3 className='text-[32px]'>Shipping and returns</h3>
            <div className='w-full flex flex-col gap-y-5 md:flex-row'>
                <div className='w-full md:w-1/3 px-4 flex flex-col gap-y-4'>
                    <h4 className='text-[16px]'>
                        Shipping
                    </h4>
                    <p className='text-[14px]'>
                        Your order will ship 1-2 business days of order placement from Lithuania.
                    </p>
                    <p className='text-[14px]'>
                        All standard delivery orders are shipped via Priority Registered Mail, while express delivery orders via DPD or FedEx. The cost of shipping is based on your location and weight of the package and will be calculated at checkout. When your order is dispatched, you will receive a confirmation email with details and tracking information.
                    </p>
                </div>
                <div className='w-full md:w-1/3 px-4 flex flex-col gap-y-4'>
                    <h4 className='text-[16px]'>
                        Delivery periods
                    </h4>
                    <p className='text-[14px]'>
                        Standard Shipping (Registered mail): 2-4 weeks.
                    </p>
                    <p className='text-[14px]'>
                        Express Shipping (DPD/FedEx): 3-5 Business Days.
                    </p>
                    <p className='text-[14px]'>
                        Delivery times are approximate and not guaranteed. Please, note that all customs duties, taxes or fees are not included and are the responsibility of the customer. We are also not responsible for any customs delays.
                    </p>
                    <p className='text-[14px]'>
                        If your package is returned to us, a refund or redelivery can be arranged.
                    </p>
                </div>
                <div className='w-full md:w-1/3 px-4 flex flex-col gap-y-4'>
                    <h4 className='text-[16px]'>
                        Returns
                    </h4>
                    <p className='text-[14px]'>
                        If you would like to return the item, please email us at millawkids@gmail.com within 14 days of order delivery. Please, provide your name, order number, and your reasons for returning it.
                    </p>
                    <p className='text-[14px]'>
                        We accept returns of undamaged and unworn items, with the exception of discounted items purchased from our Sale. These items are final sale and non-eligible for return at any time.
                    </p>
                    <p className='text-[14px]'>
                        Customer is responsible for return shipping. Original shipping and handling fees are non-refundable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Shipping;