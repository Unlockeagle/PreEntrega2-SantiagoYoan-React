import { Link } from "react-router-dom";
import CartWidget from "../ListContainer/CartWidget";
import ButtonComponent from "./ButtonComponent";
export default function NavBar() {
  return (
    <>
      <nav className="flex fixed top-0 w-full justify-between bg-slate-800 px-20 py-2 items-center ">
        <div className="flex items-center">
            <svg width="24px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M434.271903 467.915408s-39.444109 19.335347-39.444108 60.326284 39.444109 60.326284 39.444108 60.326284 39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284z m11.601209-246.719033s-39.444109 19.335347-39.444109 60.326284 39.444109 60.326284 39.444109 60.326284 39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284zM350.743202 367.371601s39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284-39.444109 19.335347-39.444108 60.326284 39.444109 60.326284 39.444108 60.326284z m37.123867-125.293051s39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284-39.444109 19.335347-39.444108 60.326284 39.444109 60.326284 39.444108 60.326284z m88.169185-163.190332s-39.444109 19.335347-39.444109 60.326284 39.444109 60.326284 39.444109 60.326283 39.444109-19.335347 39.444109-60.326283c0-41.76435-39.444109-60.326284-39.444109-60.326284z m203.407855 164.73716S718.888218 224.29003 718.888218 183.299094s-39.444109-60.326284-39.444109-60.326284-39.444109 19.335347-39.444109 60.326284 39.444109 60.326284 39.444109 60.326284z m-78.888218 60.326284c0 40.990937 39.444109 60.326284 39.444109 60.326284s39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284-39.444109 19.335347-39.444109 60.326284z m-293.897281 186.392749s-19.335347-39.444109-60.326284-39.444109-60.326284 39.444109-60.326284 39.444109 19.335347 39.444109 60.326284 39.444109 60.326284-39.444109 60.326284-39.444109zM820.978852 394.441088c-40.990937 0-60.326284 39.444109-60.326284 39.444108s19.335347 39.444109 60.326284 39.444109 60.326284-39.444109 60.326284-39.444109-19.335347-39.444109-60.326284-39.444108zM646.960725 487.250755s19.335347 39.444109 60.326284 39.444109 60.326284-39.444109 60.326284-39.444109-19.335347-39.444109-60.326284-39.444108-60.326284 39.444109-60.326284 39.444108zM454.380665 365.05136s-41.76435-14.694864-70.380665 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380664s41.76435 14.694864 70.380665-14.694864c29.389728-28.616314 14.694864-70.380665 14.694864-70.380664z m331.021148-136.120846s-41.76435-14.694864-70.380665 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380664s41.76435 14.694864 70.380665-14.694864c29.389728-29.389728 14.694864-70.380665 14.694864-70.380664z m-23.975831 110.598187s-41.76435-14.694864-70.380665 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380665s41.76435 14.694864 70.380665-14.694864c29.389728-28.616314 14.694864-70.380665 14.694864-70.380665zM314.392749 547.577039s-41.76435-14.694864-70.380664 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380665s41.76435 14.694864 70.380664-14.694864c29.389728-28.616314 14.694864-70.380665 14.694864-70.380665z m502.719033-368.145015c29.389728-29.389728 14.694864-70.380665 14.694865-70.380664s-41.76435-14.694864-70.380665 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380664s40.990937 14.694864 70.380664-14.694864z m-32.483383 187.939577s41.76435 14.694864 70.380664-14.694864c29.389728-29.389728 14.694864-70.380665 14.694864-70.380664s-41.76435-14.694864-70.380664 14.694864c-29.389728 29.389728-14.694864 70.380665-14.694864 70.380664zM588.181269 520.507553s-14.694864 41.76435 14.694864 70.380665c29.389728 29.389728 70.380665 14.694864 70.380665 14.694864s14.694864-41.76435-14.694864-70.380665c-29.389728-29.389728-70.380665-14.694864-70.380665-14.694864zM249.425982 351.903323s-14.694864 41.76435 14.694864 70.380665c29.389728 29.389728 70.380665 14.694864 70.380665 14.694864s14.694864-41.76435-14.694864-70.380665c-28.616314-29.389728-70.380665-14.694864-70.380665-14.694864z m-20.882175 78.888218s14.694864-41.76435-14.694864-70.380665c-29.389728-29.389728-70.380665-14.694864-70.380665-14.694864s-14.694864 41.76435 14.694864 70.380665c29.389728 28.616314 70.380665 14.694864 70.380665 14.694864z m65.740181-104.410876s14.694864-41.76435-14.694864-70.380665c-29.389728-29.389728-70.380665-14.694864-70.380665-14.694864s-14.694864 41.76435 14.694864 70.380665c28.616314 29.389728 70.380665 14.694864 70.380665 14.694864z m406.042296 221.196374s-14.694864 41.76435 14.694864 70.380665c29.389728 29.389728 70.380665 14.694864 70.380665 14.694864s14.694864-41.76435-14.694864-70.380665c-28.616314-28.616314-70.380665-14.694864-70.380665-14.694864zM571.166163 228.930514c-29.389728-29.389728-70.380665-14.694864-70.380665-14.694864s-14.694864 41.76435 14.694865 70.380664c29.389728 29.389728 70.380665 14.694864 70.380664 14.694864s14.694864-40.990937-14.694864-70.380664z m47.951662-17.015106s14.694864-41.76435-14.694864-70.380665c-29.389728-29.389728-70.380665-14.694864-70.380665-14.694864s-14.694864 41.76435 14.694864 70.380665c28.616314 29.389728 70.380665 14.694864 70.380665 14.694864zM330.634441 619.504532s-39.444109 19.335347-39.444109 60.326284 39.444109 60.326284 39.444109 60.326284 39.444109-19.335347 39.444109-60.326284-39.444109-60.326284-39.444109-60.326284z" fill="#f7d77d"></path><path d="M640.773414 385.160121c-16.241692-4.640483-23.975831 39.444109-37.897281 57.232628-12.374622 15.468278-29.389728 13.92145-51.818731 13.148036-1.546828-42.537764-3.093656-78.114804-4.640484-101.31722-1.546828-21.655589-6.960725-29.389728-23.202416-29.389728s-22.429003 8.507553-23.202417 29.389728c-3.093656 51.818731-6.187311 163.963746-10.054381 278.429003-37.123867-1.546828-80.435045-17.015106-105.957704-48.725076-26.296073-32.483384-36.350453-129.160121-51.818731-125.293051-15.468278 3.093656-11.601208 113.691843 25.522658 160.870091 29.389728 37.123867 74.247734 64.966767 131.480363 67.287009-3.867069 146.94864-6.960725 283.069486-6.960725 283.069486h82.755287s-6.187311-279.975831-12.374622-471.009063c36.350453-1.546828 56.459215-8.507553 71.154078-25.522659 17.015106-18.561934 33.256798-82.755287 17.015106-88.169184" fill="#65320b"></path></g></svg>
          <Link to={'/'} ><h1 className="text-3xl text-[#f7d77d] text-center">
            Araguaney</h1></Link>
          
        </div>

        <div className="flex gap-4">
          <ButtonComponent ruta={"/"} title={"All"} />
          <ButtonComponent ruta={"/men"} title={"Men"} />
          <ButtonComponent ruta={"/women"} title={"Women"} />
          <ButtonComponent ruta={"/shoes"} title={"Shoes"} />
        </div>
        <div>
            <CartWidget/>
        </div>
      </nav>
    </>
  );
}
