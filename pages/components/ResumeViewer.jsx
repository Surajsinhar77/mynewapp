
export default function ResumeViewer() {
    return (
        <>
            <div className="resumeContainer ">
                <iframe src='/SurajKumaroff.pdf' title='Suraj Kumar Resume' className=" w-full" height={700}/>
                {/* <object data="sample.pdf" type="application/pdf" width="100" height="100">
                    <a href="/Suraj_Kumar@pdf">Download</a>
                </object> */}
            </div>
        </>
    )
}