export default function Copyright() {
  return (
    <section className="border-t-[1px] border-solid border-black/15">
      <div className="px-[15px] md:px-[20px] lg:px-[30px] xl:px-[40px] m-auto max-w-[1360px]">
        {/* COPYRIGHT */}
        <div className="flex flex-col lg:flex-row justify-between text-[15.9375px] py-[15px] xl:py-[20px] lg:items-center ">
          <p className=" leading-[23.9062px] underline-offset-4">
            Copyright © 2023 &nbsp;
            <a href="#" className="underline hover:text-[#298556]">
              Local Theme Light Demo.
            </a>
            <a href="#" className="underline hover:text-[#298556]">
              Powered by Shopify
            </a>
          </p>

          {/* LANGUAGE*/}

          <select
            name=""
            id=""
            className=" mt-[10px] w-20 ml-[-4px] lg:mt-0 outline-none"
          >
            <option value="english">English</option>
            <option value="español">Español</option>
            <option value="italiano">Italiano</option>
            <option value="deutsch">Deutsch</option>
            <option value="français">Français</option>
            <option value="العربية">العربية</option>
            <option value="עברית">עברית</option>
            <option value="Nederlands">Nederlands</option>
            <option value="日本語">日本語</option>
            <option value="Polski">Polski</option>
            <option value="Português (brasil)">Português (brasil)</option>
            <option value="Română">Română</option>
            <option value="Svenska">Svenska</option>
            <option value="ภาษาไทย">ภาษาไทย</option>
            <option value="Türkçe">Türkçe</option>
            <option value="简体中文">简体中文</option>
            <option value="Norsk (bokmål)">Norsk (bokmål)</option>
            <option value="Русский">Русский</option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </section>
  );
}
