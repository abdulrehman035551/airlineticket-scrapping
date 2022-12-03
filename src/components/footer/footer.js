import './footer.css'
export function Footer()
{
    
  return<>
<footer
  className="text-center text-white"
  style={{ backgroundColor: "#45637d" }}
>
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Iframe */}
    <section className="">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <iframe
              className="shadow-1-strong rounded"
              src="https://www.youtube.com/watch?v=39Lhyf5NbM0"
              title="YouTube video"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* Section: Iframe */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
  {/* Copyright */}
</footer>


  </>


}