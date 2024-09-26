const ResumePage = () => {
  return (
    <main>
      <div className=" h-screen container mx-auto pb-10">
        <iframe
          src="/education/hirock_ressume.pdf"
          className="w-full h-full border-0"
          title="PDF Viewer"
          name="PDF"
          allowFullScreen
        />
      </div>
    </main>
  );
};

export default ResumePage;
