import React from "react";

import "./style.css";

// eslint-disable-next-line
const formation = () => {
  return (
    <section id="training">
      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <center>
            <h2
              className="ui massive label"
              style={{ backgroundColor: "#480909", color: "#fff" }}
            >
              Formations
            </h2>{" "}
          </center>

          <h4 className="ui horizontal header divider">
            <span style={{ color: "darkblue" }}>
              Diplôme Universitaire de Technologie(DUT) à l'ESTE & LP
            </span>
          </h4>
          <p>
            La durée des études est de quatre semestres universitaires. La
            Première Année comporte 32 semaines de formation à raison de 36
            heures par semaine en moyenne, plus un mois de stage d'initiation en
            Entreprise. La Deuxième Année est étalée sur 28 semaines de
            formation à raison de 36 heures par semaine en moyenne, plus deux
            mois de stage de fin de formation en Entreprise.
          </p>
          <p>
            Le système d'évaluation des connaissances repose sur le contrôle
            continue au cours de quatre semestres d'étude. Le contrôle continue
            porte jugement sur les connaissances acquises et la participation en
            classe ainsi que sur l'intérêt accordé par l'étudiant à
            l'enseignement et sur les progrès constatés. Les étudiants sont
            tenus aussi d'accomplir des stages pratiques obligatoires dans
            l'industrie. Ces stages font l'objet d'un rapport qui est soutenu
            devant un jury mixte composé d'enseignants et d'industriels.
            L'assiduité à toutes les activités d'enseignement est obligatoire.
          </p>

          <p>
            A la fin du quatrième semestre le Diplôme Universitaire de
            Technologie ( D.U.T ) est délivré aux étudiants ayant justifié de
            résultats satisfaisants. En plus la licence professionnelle offerte
            à l'ESTE dans le domaine des énergies renouvelables, environnement,
            informatique et tourisme.
          </p>
        </div>

        <div
          className="ui stackable two column grid"
          style={{ marginLeft: "12px", marginRight: "12px" }}
        >
          <div
            className="column"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <table className="ui table">
              <thead>
                <tr>
                  <th>DUT</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="collapsing">
                    <i class="circle icon"></i> DUT Génie Informatique
                  </td>
                  <td>Génie logiciel/Réseaux</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i> DUT Energies Renouvelables
                  </td>
                  <td>Energies Renouvelables</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i> DUT Techniques de Management
                  </td>
                  <td>Finance, Comptabilité, Fiscalité (F.C.F)</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i>DUT Gestion des Organisations et
                    des Destinations Touristiques
                  </td>
                  <td> Gestion Touristique et Hôtelière</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i>DUT Génie de l'Environnement
                  </td>
                  <td>
                    Gestion de l'environnement, Evaluation d'impact, Traitement
                    de pollution, gestion d'entreprise
                    environnementale,valorisation de déchets et des eaux usées.
                  </td>
                </tr>

                <tr>
                  <td>
                    <i class="circle icon"></i>DUT Informatique Décisionnelle et
                    Science de Données
                  </td>
                  <td>Informatique et Big Data.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="column"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <table class="ui table">
              <thead>
                <tr>
                  <th>Licence professionnelle</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="collapsing">
                    <i class="circle icon"></i> LP Management Bancaire et
                    Financier (MBF)
                  </td>
                  <td>Finance, Comptabilité, Fiscalité (F.C.F)</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i>LP Management du tourisme (MT)
                  </td>
                  <td>Gestion Touristique et Hôtelière</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i> LP Energies Renouvelables et
                    Développement Durable (ERDD)
                  </td>
                  <td>Energies Renouvelables</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i>LP Ingénieriedes Systemes
                    Informatiques Et Logiciels (ISIL)
                  </td>
                  <td> Génie logiciel / Réseaux</td>
                </tr>
                <tr>
                  <td>
                    <i class="circle icon"></i>LP Modélisation et Gestion de
                    l'Environnement (MGE)
                  </td>
                  <td>
                    Gestion de l'environnement, Evaluation d'impact, Traitement
                    de pollution, gestion d'entreprise
                    environnementale,valorisation de déchets et des eaux usées.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default formation;
