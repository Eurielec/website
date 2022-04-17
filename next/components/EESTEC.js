import Link from "next/link";

function EESTEC() {
  return (
    <div className="eestec-container">
      <div className="eestec">
        <div className="name">
          EESTEC
        </div>
        <p className="body">
          <Link href="https://www.eestec.net">
            <a className="enlace">EESTEC</a>
          </Link>{" "}
          (Electrical Engineering Students European Association) es una{" "}
          <span className="highlight-red"
          >
            asociación de estudiantes
          </span>{" "}
          europeos de Ingenierías relacionadas con la electrónica y las
          telecomunicaciones. Sus objetivos son promover el contacto entre
          estudiantes de distintos países y facilitar el acercamiento cultural y
          de conocimientos, a través de la realización de diversos eventos.
          Además la organización de dichos eventos fomenta el desarrollo de
          capacidades de coordinación, responsabilidad y liderazgo entre los
          coordinadores, y el contacto con otras culturas y otras lenguas
          enriquece enormemente a los participantes.
        </p>
      </div>
    </div>
  );
}

export default EESTEC;
