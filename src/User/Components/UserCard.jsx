

export const UserCard = ()=>{
    return (
        <section className=" flex flex-row gap-10 ml-20 basis-1/2">
            <article className="flex flex-col mt-10 ml-5">
               <p className="flex flex-row gap-2">
                <span className="text-4xl font-bold">Account</span>
                <span className="self-center font-bold text-sm text-red-500 pt-1">Member since 20 Octuber 2019</span>
               </p>
                <article className="flex flex-col gap-2 ">
                    <p className="flex gap-1">
                    <span className="text-[1.8rem] font-bold">Juan Carlos Berria</span>
                    <div className="flex flex-col gap-1 self-center">
                        <div className="bg-blue-900 w-10 h-4"></div>
                        <div className="bg-blue-900 w-10 h-4"></div>
                    </div>
                    </p>
                    <p className="flex gap-1 m-1">
                    <div className="w-14 h-10 bg-theme"></div>
                    <span className="font-bold  self-center">Gold member</span>
                    </p>
                </article>
             </article>

            <div className="flex gap-1 mt-8 flex-col basis-1/2">
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Phone:</span>
                    <span className="font-medium text-theme">2345-2343</span>
                </p>
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Email</span>
                    <span className="font-medium text-theme">Exmaple@gmail.com</span>
                </p>
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Date of Birth</span>
                    <span className="font-medium text-theme">12/04/1999</span>
                </p>
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Date of Birth</span>
                    <span className="font-medium text-theme">12/04/1999</span>
                </p>
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Date of Birth</span>
                    <span className="font-medium text-theme">12/04/1999</span>
                </p>
                <p className="flex flex-col gap-1 border-b-2 border-theme">
                    <span className="font-bold text-theme">Date of Birth</span>
                    <span className="font-medium text-theme">12/04/1999</span>
                </p>
                </div>
        </section>
    )
}