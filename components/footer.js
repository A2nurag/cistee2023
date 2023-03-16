export default function Footer() {
  return (
    <footer className="bg-indigo-800 py-5 w-full text-slate-800 px-2">
      <div className="container mx-auto max-w-5xl text-justify">
        <div className="py-2 mx-auto text-center">
          <p className="font-bold text-zinc-200 text-xl">CISTEE 2023</p>
          <p className="mt-2 text-zinc-300">
            Computational Intelligence and Smart Technologies in Electrical
            Engineering
          </p>
          <p className="mt-2 text-slate-300 text-sm">
            &#169; Copyright CISTEE 2023 & NIT Durgapur : All rights reserved.
            Use of this Website signifies your agreement to the{" "}
            <a
              href="https://www.ieee.org/about/help/site-terms-conditions.html"
              className="font-medium underline"
            >
              IEEE Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
