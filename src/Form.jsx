import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
export default function Form() {
  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [selectedNeighbourhoodID, setSelectedNeighbourhoodID] = useState(0);
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState({
    id: "",
    name: "",
    ilceye_uzaklik: "",
    yuzolcumu: "",
    imar_durumu: "",
    hane_sayisi: "",
    esnaf_sayisi: "",
    kadin_sayisi: "",
    erkek_sayisi: "",
    cop_kutusu_sayisi: "",
    okul_sayisi: "",
    ogrenci_sayisi: "",
    cami_sayisi: "",
    saglik_ocagi: "",
    park_sayisi: "",
    koy_konagi: "",
    yesilkartli_sayisi: "",
    belediye_yardimi_alan_sayisi: "",
    akp2023mv_oysayisi: "",
    mhp2023mv_oysayisi: "",
    chp2023mv_oysayisi: "",
    iyi2023mv_oysayisi: "",
    hdp2023mv_oysayisi: "",
    cumhur2023oy_sayisi: "",
    millet2023oy_sayisi: "",
    yerel2019mhp_oy_sayisi: "",
    yerel2019iyi_oy_sayisi: "",
    nufus: "",
    created_at: "",
    updated_at: "",
  });
  const [managerNotes, setManagerNotes] = useState([]);
  const [publicOpinions, setPublicOpinions] = useState([]);
  const [projects, setProjects] = useState([]);
  const [headmanInputsIsEnabled, setHeadmanInputsIsEnabled] = useState(false);
  const [neighbourhoodInputIsEnabled, setNeighbourhoodInputIsEnabled] =
    useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mvInputIsEnabled, setMvInputIsEnabled] = useState(false);
  const [cbInputIsEnabled, setCbInputIsEnabled] = useState(false);
  const [belediye2019InputIsEnabled, setBelediye2019InputIsEnabled] =
    useState(false);
  const [
    neighbourhoodSocialInputIsEnabled,
    setNeighbourhoodSocialInputIsEnabled,
  ] = useState(false);

  const [
    neighbourhoodSocialHelpInputIsEnabled,
    setNeighbourhoodSocialHelpInputIsEnabled,
  ] = useState(false);

  const [headman, setHeadman] = useState({
    muhtar_adsoyad: "",
    muhtar_cep: 0,
    muhtar_evtel: 0,
  });

  function getNeighbourhoods() {
    axios.get("http://stajprojeapi.test/api/neighbourhood").then((response) => {
      setNeighbourhoods(response.data);
    });
  }

  function handleNeighbourhoodChange(event) {
    if (event.target.value == "Mahalle Seçiniz") {
      return;
    }
    setSelectedNeighbourhoodID(event.target.value);
    axios
      .get(`http://stajprojeapi.test/api/neighbourhood/${event.target.value}`)
      .then((response) => {
        setSelectedNeighbourhood(response.data);
      });

    axios
      .get(
        `http://stajprojeapi.test/api/neighbourhood/${event.target.value}/manager`
      )
      .then((response) => {
        setManagerNotes(response.data);
      });

    axios
      .get(
        `http://stajprojeapi.test/api/neighbourhood/${event.target.value}/opinion`
      )
      .then((response) => {
        setPublicOpinions(response.data);
      });

    axios
      .get(
        `http://stajprojeapi.test/api/neighbourhood/${event.target.value}/project`
      )
      .then((response) => {
        setProjects(response.data);
      });
  }
  const validationSchema = Yup.object().shape({
    ilceye_uzaklik: Yup.string().required("Zorunlu Alan"),
    yuzolcumu: Yup.number().typeError("Sayı giriniz").required("Zorunlu Alan"),
    imar_durumu: Yup.string().required("Zorunlu alan"),
    hane_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    esnaf_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    kadin_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    erkek_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    cop_kutusu_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    okul_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    ogrenci_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    cami_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    park_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    saglik_ocagi: Yup.string().required("Zorunlu alan"),
    koy_konagi: Yup.string().required("Zorunlu alan"),
    yesilkartli_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    belediye_yardimi_alan_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    akp2023mv_oysayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    mhp2023mv_oysayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    chp2023mv_oysayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    iyi2023mv_oysayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    hdp2023mv_oysayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    cumhur2023oy_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    millet2023oy_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    yerel2019mhp_oy_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    yerel2019iyi_oy_sayisi: Yup.number()
      .typeError("Sayı giriniz")
      .required("Zorunlu Alan"),
    nufus: Yup.number().typeError("Sayı giriniz").required("Zorunlu Alan"),
  });

  const formik = useFormik({
    initialValues: {
      mahalle_adi: selectedNeighbourhood.mahalle_adi,
      ilceye_uzaklik: selectedNeighbourhood.ilceye_uzaklik,
      yuzolcumu: selectedNeighbourhood.yuzolcumu,
      imar_durumu: selectedNeighbourhood.imar_durumu,
      hane_sayisi: selectedNeighbourhood.hane_sayisi,
      esnaf_sayisi: selectedNeighbourhood.esnaf_sayisi,
      kadin_sayisi: selectedNeighbourhood.kadin_sayisi,
      erkek_sayisi: selectedNeighbourhood.erkek_sayisi,
      cop_kutusu_sayisi: selectedNeighbourhood.cop_kutusu_sayisi,
      okul_sayisi: selectedNeighbourhood.okul_sayisi,
      ogrenci_sayisi: selectedNeighbourhood.ogrenci_sayisi,
      cami_sayisi: selectedNeighbourhood.cami_sayisi,
      saglik_ocagi: selectedNeighbourhood.saglik_ocagi,
      park_sayisi: selectedNeighbourhood.park_sayisi,
      koy_konagi: selectedNeighbourhood.koy_konagi,
      yesilkartli_sayisi: selectedNeighbourhood.yesilkartli_sayisi,
      belediye_yardimi_alan_sayisi:
        selectedNeighbourhood.belediye_yardimi_alan_sayisi,
      akp2023mv_oysayisi: selectedNeighbourhood.akp2023mv_oysayisi,
      mhp2023mv_oysayisi: selectedNeighbourhood.mhp2023mv_oysayisi,
      chp2023mv_oysayisi: selectedNeighbourhood.chp2023mv_oysayisi,
      iyi2023mv_oysayisi: selectedNeighbourhood.iyi2023mv_oysayisi,
      hdp2023mv_oysayisi: selectedNeighbourhood.hdp2023mv_oysayisi,
      cumhur2023oy_sayisi: selectedNeighbourhood.cumhur2023oy_sayisi,
      millet2023oy_sayisi: selectedNeighbourhood.millet2023oy_sayisi,
      yerel2019mhp_oy_sayisi: selectedNeighbourhood.yerel2019mhp_oy_sayisi,
      yerel2019iyi_oy_sayisi: selectedNeighbourhood.yerel2019iyi_oy_sayisi,
      nufus: selectedNeighbourhood.nufus,
      managerNotes: managerNotes,
      muhtar_adsoyad: headman.muhtar_adsoyad,
      muhtar_cep: headman.muhtar_cep,
      muhtar_evtel: headman.muhtar_evtel,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    getNeighbourhoods();
  }, []);

  useEffect(() => {
    if (selectedNeighbourhoodID) {
      axios
        .get(
          `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}/headman`
        )
        .then((response) => setHeadman(response.data));
    }
  }, [selectedNeighbourhoodID]);

  function addNewManagerNote() {
    if (selectedNeighbourhood.id != "") {
      setManagerNotes((prev) => [...prev, { not: "", clientId: uuidv4() }]);
    }
  }

  function deleteManagerNote(managerNote) {
    if (confirm("Müdürlük notu silinecek emin misiniz?")) {
      if (!managerNote.id) {
        setManagerNotes((prev) =>
          prev.filter(
            (noteElement) => noteElement.clientId != managerNote.clientId
          )
        );
      } else {
        axios
          .delete(`http://stajprojeapi.test/api/manager/${managerNote.id}`)
          .then((response) =>
            setManagerNotes((prev) =>
              prev.filter((noteElement) => noteElement.id != response.data)
            )
          )
          .catch(() => {
            alert("Eksik veya hatalı işlem yaptınız!");
            return;
          });
      }
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } else {
      return;
    }
  }

  function addNewPublicOpinion() {
    if (selectedNeighbourhood.id != "") {
      setPublicOpinions((prev) => [...prev, { talep: "", clientId: uuidv4() }]);
    }
  }

  function deletePublicOpinion(opinion) {
    if (confirm(`"${opinion.talep}" silinecek emin misiniz?`)) {
      if (!opinion.id) {
        setPublicOpinions((prev) =>
          prev.filter((p_opinion) => p_opinion.clientId != opinion.clientId)
        );
      } else {
        axios
          .delete(`http://stajprojeapi.test/api/opinion/${opinion.id}`)
          .then((response) =>
            setPublicOpinions((prev) =>
              prev.filter((p_opinion) => p_opinion.id != response.data)
            )
          )
          .catch(() => {
            alert("Eksik veya hatalı işlem yaptınız!");
            return;
          });
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } else {
      return;
    }
  }

  function addNewProject(proje_tipi) {
    if (selectedNeighbourhood.id != "") {
      setProjects((prev) => [
        ...prev,
        {
          clientId: uuidv4(),
          proje_adi: "",
          proje_tipi: proje_tipi,
          yapim_yili: "",
          masraf: "",
          hedef_m2: "",
          gercek_m2: "",
          tamamlanma_yuzdesi: "0",
          proje_durumu: "",
          proje_detayi: "",
          mevkii: "",
        },
      ]);
    }
  }

  function handleFenInputChange(event, proje, key) {
    setProjects((prev) => {
      let selectedIndex;
      if (proje.id) {
        selectedIndex = prev.findIndex((p) => p.id == proje.id);
      } else {
        selectedIndex = prev.findIndex((p) => p.clientId == proje.clientId);
      }
      prev[selectedIndex][key] = event.target.value;
      return [...prev];
    });
  }

  function updateHeadman() {
    if (
      formik.values.muhtar_adsoyad == "" ||
      formik.values.muhtar_cep == "" ||
      formik.values.muhtar_evtel == ""
    ) {
      alert("Eksik veya hatalı işlem yaptınız.");
      return;
    }

    axios
      .put(
        `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}/headman`,
        {
          muhtar_adsoyad: formik.values.muhtar_adsoyad,
          muhtar_cep: formik.values.muhtar_cep,
          muhtar_evtel: formik.values.muhtar_evtel,
        }
      )
      .then((response) => {
        setHeadman(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function updateNeighbourhoodFields(type) {
    console.log("NUFUS:", formik.values.nufus);
    if (type == "genel") {
      if (
        formik.errors.ilceye_uzaklik ||
        formik.errors.yuzolcumu ||
        formik.errors.imar_durumu ||
        formik.errors.hane_sayisi ||
        formik.errors.esnaf_sayisi ||
        formik.errors.nufus ||
        formik.errors.kadin_sayisi ||
        formik.errors.erkek_sayisi ||
        formik.errors.cop_kutusu_sayisi
      ) {
        alert("Eksik veya hatalı işlem yaptınız.");
        return;
      }
    } else if (type == "egitim") {
      if (
        formik.errors.okul_sayisi ||
        formik.errors.ogrenci_sayisi ||
        formik.errors.cami_sayisi ||
        formik.errors.saglik_ocagi ||
        formik.errors.park_sayisi ||
        formik.errors.koy_konagi
      ) {
        console.log(formik.values.okul_sayisi);
        console.log(typeof formik.values.ogrenci_sayisi);
        console.log(formik.values.cami_sayisi);
        console.log(formik.values.saglik_ocagi);
        console.log(formik.values.park_sayisi);
        console.log(formik.values.koy_konagi);

        alert("Eksik veya hatalı işlem yaptınız.");
        return;
      }
    } else if (type == "sosyal") {
      if (
        formik.values.yesilkartli_sayisi == "" ||
        formik.values.belediye_yardimi_alan_sayisi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız.");
        return;
      }
    } else if (type == "mv2023") {
      if (
        formik.values.mhp2023mv_oysayisi == "" ||
        formik.values.akp2023mv_oysayisi == "" ||
        formik.values.iyi2023mv_oysayisi == "" ||
        formik.values.chp2023mv_oysayisi == "" ||
        formik.values.hdp2023mv_oysayisi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız.");
        return;
      }
    } else if (type == "cb2023") {
      if (
        formik.values.cumhur2023oy_sayisi == "" ||
        formik.values.millet2023oy_sayisi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız.");
        return;
      } else if (type == "yerel2019") {
        if (
          formik.values.yerel2019mhp_oy_sayisi == "" ||
          formik.values.yerel2019iyi_oy_sayisi == ""
        ) {
          alert("Eksik veya hatalı işlem yaptınız.");
          return;
        }
      }
    }
    axios
      .put(
        `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}`,
        {
          mahalle_adi: formik.values.mahalle_adi,
          ilceye_uzaklik: formik.values.ilceye_uzaklik,
          yuzolcumu: formik.values.yuzolcumu,
          imar_durumu: formik.values.imar_durumu,
          hane_sayisi: formik.values.hane_sayisi,
          esnaf_sayisi: formik.values.esnaf_sayisi,
          kadin_sayisi: formik.values.kadin_sayisi,
          erkek_sayisi: formik.values.erkek_sayisi,
          cop_kutusu_sayisi: formik.values.cop_kutusu_sayisi,
          okul_sayisi: formik.values.okul_sayisi,
          ogrenci_sayisi: formik.values.ogrenci_sayisi,
          cami_sayisi: formik.values.cami_sayisi,
          saglik_ocagi: formik.values.saglik_ocagi,
          park_sayisi: formik.values.park_sayisi,
          koy_konagi: formik.values.koy_konagi,
          yesilkartli_sayisi: formik.values.yesilkartli_sayisi,
          belediye_yardimi_alan_sayisi:
            formik.values.belediye_yardimi_alan_sayisi,
          akp2023mv_oysayisi: formik.values.akp2023mv_oysayisi,
          mhp2023mv_oysayisi: formik.values.mhp2023mv_oysayisi,
          chp2023mv_oysayisi: formik.values.chp2023mv_oysayisi,
          iyi2023mv_oysayisi: formik.values.iyi2023mv_oysayisi,
          hdp2023mv_oysayisi: formik.values.hdp2023mv_oysayisi,
          cumhur2023oy_sayisi: formik.values.cumhur2023oy_sayisi,
          millet2023oy_sayisi: formik.values.millet2023oy_sayisi,
          yerel2019mhp_oy_sayisi: formik.values.yerel2019mhp_oy_sayisi,
          yerel2019iyi_oy_sayisi: formik.values.yerel2019iyi_oy_sayisi,
          nufus: formik.values.nufus,
        }
      )
      .then((response) => {
        setSelectedNeighbourhood(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function insertManagerNote(manager) {
    if (manager.not == "") {
      alert("Eksik veya hatalı işlem yaptınız.");
    }

    axios
      .post(
        `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}/manager`,
        {
          not: manager.not,
          neighbourhood_id: selectedNeighbourhoodID,
        }
      )
      .then((response) => {
        setManagerNotes(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function updateManagerNote(manager) {
    if (manager.not == "") {
      alert("Eksik veya hatalı işlem yaptınız.");
      return;
    }
    axios
      .put(`http://stajprojeapi.test/api/manager/${manager.id}`, {
        not: manager.not,
        neighbourhood_id: selectedNeighbourhoodID,
      })
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function insertOpinion(opinion) {
    if (opinion.talep == "") {
      alert("Eksik veya hatalı işlem yaptınız.");
    }
    axios
      .post(
        `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}/opinion`,
        {
          talep: opinion.talep,
          neighbourhood_id: selectedNeighbourhoodID,
        }
      )
      .then((response) => {
        setPublicOpinions(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function updateOpinion(opinion) {
    if (opinion.talep == "") {
      alert("Eksik veya hatalı işlem yaptınız.");
      return;
    }
    axios
      .put(`http://stajprojeapi.test/api/opinion/${opinion.id}`, {
        talep: opinion.talep,
        neighbourhood_id: selectedNeighbourhoodID,
      })
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function insertProject(project, type) {
    if (type == "fen") {
      if (
        project.proje_adi == "" ||
        project.proje_tipi == "" ||
        project.yapim_yili == "" ||
        project.masraf == "" ||
        project.hedef_m2 == "" ||
        project.gercek_m2 == "" ||
        project.tamamlanma_yuzdesi == "" ||
        project.proje_durumu == "" ||
        project.proje_detayi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      }
    } else if (type == "parkbahce") {
      if (
        project.proje_adi == "" ||
        project.proje_tipi == "" ||
        project.yapim_yili == "" ||
        project.masraf == "" ||
        project.gercek_m2 == "" ||
        project.tamamlanma_yuzdesi == "" ||
        project.proje_durumu == "" ||
        project.proje_detayi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      }
    }

    axios
      .post(
        `http://stajprojeapi.test/api/neighbourhood/${selectedNeighbourhoodID}/project`,
        {
          proje_adi: project.proje_adi,
          proje_tipi: type,
          yapim_yili: project.yapim_yili,
          masraf: project.masraf,
          hedef_m2: type == "parkbahce" ? project.gercek_m2 : project.hedef_m2,
          gercek_m2: project.gercek_m2,
          tamamlanma_yuzdesi: project.tamamlanma_yuzdesi,
          proje_durumu: project.proje_durumu,
          proje_detayi: project.proje_detayi,
          mevkii: project.mevkii,
        }
      )
      .then((response) => {
        setProjects(response.data);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function updateProject(project, type) {
    if (type == "fen") {
      if (
        project.proje_adi == "" ||
        project.proje_tipi == "" ||
        project.yapim_yili == "" ||
        project.masraf == "" ||
        project.hedef_m2 == "" ||
        project.gercek_m2 == "" ||
        project.tamamlanma_yuzdesi == "" ||
        project.proje_durumu == "" ||
        project.proje_detayi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      }
    } else if (type == "parkbahce") {
      if (
        project.proje_adi == "" ||
        project.proje_tipi == "" ||
        project.yapim_yili == "" ||
        project.masraf == "" ||
        project.gercek_m2 == "" ||
        project.tamamlanma_yuzdesi == "" ||
        project.proje_durumu == "" ||
        project.proje_detayi == ""
      ) {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      }
    }

    axios
      .put(`http://stajprojeapi.test/api/project/${project.id}`, {
        proje_adi: project.proje_adi,
        proje_tipi: type,
        yapim_yili: project.yapim_yili,
        masraf: project.masraf,
        hedef_m2: project.hedef_m2,
        gercek_m2: project.gercek_m2,
        tamamlanma_yuzdesi: project.tamamlanma_yuzdesi,
        proje_durumu: project.proje_durumu,
        proje_detayi: project.proje_detayi,
        neighbourhood_id: selectedNeighbourhoodID,
      })
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      })
      .catch(() => {
        alert("Eksik veya hatalı işlem yaptınız!");
        return;
      });
  }

  function deleteProject(project) {
    if (confirm(`Proje silinecek emin misiniz?`)) {
      if (!project.id) {
        setProjects((prev) =>
          prev.filter((p) => p.clientId != project.clientId)
        );
      } else {
        axios
          .delete(`http://stajprojeapi.test/api/project/${project.id}`)
          .then((response) =>
            setProjects((prev) => prev.filter((p) => p.id != response.data))
          )
          .catch(() => {
            alert("Eksik veya hatalı işlem yaptınız!");
            return;
          });
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } else {
      return;
    }
  }

  return (
    <div>
      <Formik className="bg-base-300 w-full  mx-auto">
        {() => (
          <>
            <div className="form-control w-full max-w-xs mx-auto">
              {isSuccess && (
                <div className="fixed left-0 right-0 top-12   alert alert-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>İşlem Gerçekleşti!</span>
                </div>
              )}

              <label className="label">
                <span className="label-text font-bold">Mahalle seçiniz</span>
              </label>
              <select
                className="select select-bordered"
                onChange={handleNeighbourhoodChange}
                value={selectedNeighbourhoodID}
              >
                <option selected>Mahalle Seçiniz</option>
                {neighbourhoods.map((nb) => (
                  <option key={nb.id} value={nb.id}>
                    {nb.mahalle_adi}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex max-lg:flex-col max-lg:items-center justify-center gap-8 mt-8">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Muhtar Adı</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={formik.values.muhtar_adsoyad}
                  onChange={formik.handleChange}
                  disabled={!headmanInputsIsEnabled}
                  name="muhtar_adsoyad"
                />
              </div>
              <div className="flex gap-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Muhtar Cep Tel No</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={formik.values.muhtar_cep}
                    onChange={formik.handleChange}
                    disabled={!headmanInputsIsEnabled}
                    name="muhtar_cep"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Muhtar Ev Tel No</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={formik.values.muhtar_evtel}
                    onChange={formik.handleChange}
                    disabled={!headmanInputsIsEnabled}
                    name="muhtar_evtel"
                  />
                </div>
              </div>
              <div className="lg:self-end flex gap-3">
                <button
                  onClick={() =>
                    setHeadmanInputsIsEnabled(!headmanInputsIsEnabled)
                  }
                  className="btn btn-warning"
                >
                  {headmanInputsIsEnabled
                    ? "Düzenleme modunu kapa"
                    : "Düzenleme modunu aç"}
                </button>
                {headmanInputsIsEnabled && (
                  <button onClick={updateHeadman} className="btn btn-info">
                    Kaydet
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col  w-full  lg:flex-row mt-12">
              <div className="lg:w-1/3 flex flex-col gap-6  items-center">
                <div className="w-full flex justify-between p-2 bg-orange-500">
                  <h1 className="text-center py-2 font-bold text-lg">
                    Mahalle Bilgileri
                  </h1>

                  <span className="flex gap-2 max-sm:flex-col items-center">
                    <button
                      onClick={() =>
                        setNeighbourhoodInputIsEnabled(
                          !neighbourhoodInputIsEnabled
                        )
                      }
                      className="btn btn-sm btn-warning"
                    >
                      {neighbourhoodInputIsEnabled
                        ? "Düzenleme kapa"
                        : "Düzenleme"}
                    </button>
                    {neighbourhoodInputIsEnabled && (
                      <button
                        onClick={() => updateNeighbourhoodFields("genel")}
                        className="btn btn-sm btn-info"
                      >
                        Kaydet
                      </button>
                    )}
                  </span>
                </div>
                <div className="flex items-center w-full justify-between ">
                  <label className="label">
                    <span className="label-text">İlçeye Uzaklık</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="ilceye_uzaklik"
                    value={formik.values.ilceye_uzaklik}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.ilceye_uzaklik && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.ilceye_uzaklik}
                  </p>
                )}

                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Yüzölçümü</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="yuzolcumu"
                    value={formik.values.yuzolcumu}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.yuzolcumu && (
                  <p className="mt-0 text-red-500">{formik.errors.yuzolcumu}</p>
                )}

                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">İmar Durumu</span>
                  </label>
                  <select
                    value={formik.values.imar_durumu}
                    onChange={formik.handleChange}
                    className="select select-xs w-full max-w-xs"
                    disabled={!neighbourhoodInputIsEnabled}
                    name="imar_durumu"
                  >
                    <option disabled selected>
                      İmar Durumu
                    </option>
                    <option value={1}>Var</option>
                    <option value={0}>Yok</option>
                  </select>
                </div>
                {formik.errors.imar_durumu && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.imar_durumu}
                  </p>
                )}

                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Hane sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="hane_sayisi"
                    value={formik.values.hane_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.hane_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.hane_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">İşyeri/Esnaf Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="esnaf_sayisi"
                    value={formik.values.esnaf_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.esnaf_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.esnaf_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Nüfusu -2020 yılı-</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="nufus"
                    value={formik.values.nufus}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.nufus && (
                  <p className="mt-0 text-red-500">{formik.errors.nufus}</p>
                )}

                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Kadın Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="kadin_sayisi"
                    value={formik.values.kadin_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.kadin_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.kadin_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Erkek Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="erkek_sayisi"
                    value={formik.values.erkek_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.erkek_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.erkek_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Çöp Konteynırı Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="cop_kutusu_sayisi"
                    value={formik.values.cop_kutusu_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodInputIsEnabled}
                  />
                </div>
                {formik.errors.cop_kutusu_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.cop_kutusu_sayisi}
                  </p>
                )}
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="lg:w-1/3 flex flex-col gap-6  items-center">
                <div className="w-full flex justify-between items-center p-2 bg-orange-500">
                  <h1 className="text-center py-2 font-bold text-sm">
                    Mahallede bulunan eğitim alanları ve sosyal alan
                  </h1>
                  <span className="flex flex-col gap-3 ml-2">
                    <button
                      onClick={() =>
                        setNeighbourhoodSocialInputIsEnabled(
                          !neighbourhoodSocialInputIsEnabled
                        )
                      }
                      className="btn btn-sm btn-warning"
                    >
                      {neighbourhoodSocialInputIsEnabled
                        ? "Düzenleme kapa"
                        : "Düzenleme"}
                    </button>
                    {neighbourhoodSocialInputIsEnabled && (
                      <button
                        onClick={() => updateNeighbourhoodFields("egitim")}
                        className="btn btn-sm btn-info"
                      >
                        Kaydet
                      </button>
                    )}
                  </span>
                </div>
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Okul Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-md input-bordered w-full max-w-xs"
                    name="okul_sayisi"
                    value={formik.values.okul_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialInputIsEnabled}
                  />
                </div>
                {formik.errors.okul_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.okul_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Öğrenci Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-md input-bordered w-full max-w-xs"
                    name="ogrenci_sayisi"
                    value={formik.values.ogrenci_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialInputIsEnabled}
                  />
                </div>
                {formik.errors.ogrenci_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.ogrenci_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Cami Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-md input-bordered w-full max-w-xs"
                    name="cami_sayisi"
                    value={formik.values.cami_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialInputIsEnabled}
                  />
                </div>
                {formik.errors.cami_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.cami_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Sağlık Ocağı</span>
                  </label>
                  <select
                    value={formik.values.saglik_ocagi}
                    onChange={formik.handleChange}
                    className="select select-md w-full max-w-xs"
                    disabled={!neighbourhoodSocialInputIsEnabled}
                    name="saglik_ocagi"
                  >
                    <option disabled selected>
                      Sağlık Ocağı
                    </option>
                    <option value={1}>Var</option>
                    <option value={0}>Yok</option>
                  </select>
                </div>
                {formik.errors.saglik_ocagi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.saglik_ocagi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Park Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-md input-bordered w-full max-w-xs"
                    name="park_sayisi"
                    value={formik.values.park_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialInputIsEnabled}
                  />
                </div>
                {formik.errors.park_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.park_sayisi}
                  </p>
                )}
                <div className="flex items-center w-full justify-between">
                  <label className="label">
                    <span className="label-text">Köy Konağı</span>
                  </label>
                  <select
                    value={formik.values.koy_konagi}
                    onChange={formik.handleChange}
                    className="select select-md w-full max-w-xs"
                    name="koy_konagi"
                    disabled={!neighbourhoodSocialInputIsEnabled}
                  >
                    <option disabled selected>
                      Köy Konağı
                    </option>
                    <option value={1}>Var</option>
                    <option value={0}>Yok</option>
                  </select>
                </div>
                {formik.errors.koy_konagi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.koy_konagi}
                  </p>
                )}
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="lg:w-1/3 flex flex-col  gap-6 ">
                <div className="w-full flex justify-between items-center p-2 bg-orange-500">
                  <h1 className="text-center py-2 font-bold text-sm">
                    Sosyal Yardım İşleri
                  </h1>
                  <span className="flex max-sm:flex-col gap-4">
                    <button
                      onClick={() =>
                        setNeighbourhoodSocialHelpInputIsEnabled(
                          !neighbourhoodSocialHelpInputIsEnabled
                        )
                      }
                      className="btn btn-warning"
                    >
                      {neighbourhoodSocialHelpInputIsEnabled
                        ? "Düzenleme kapa"
                        : "Düzenleme"}
                    </button>
                    {neighbourhoodSocialHelpInputIsEnabled && (
                      <button
                        onClick={() => updateNeighbourhoodFields("sosyal")}
                        className="btn btn-info"
                      >
                        Kaydet
                      </button>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="label">
                    <span className="label-text">Yeşil Kartlı Kişi Sayısı</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="yesilkartli_sayisi"
                    value={formik.values.yesilkartli_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialHelpInputIsEnabled}
                  />
                </div>
                {formik.errors.yesilkartli_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.yesilkartli_sayisi}
                  </p>
                )}
                <div className="flex items-center  justify-between">
                  <label className="label">
                    <span className="label-text">
                      Alanya Belediyesinden Yardım Alan Kişi Sayısı
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-sm input-bordered w-full max-w-xs"
                    name="belediye_yardimi_alan_sayisi"
                    value={formik.values.belediye_yardimi_alan_sayisi}
                    onChange={formik.handleChange}
                    disabled={!neighbourhoodSocialHelpInputIsEnabled}
                  />
                </div>
                {formik.errors.belediye_yardimi_alan_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.belediye_yardimi_alan_sayisi}
                  </p>
                )}

                <div className="flex flex-col w-full gap-3">
                  <div className="w-full flex justify-between items-center p-2 mt-5 bg-orange-500">
                    <h1 className="text-center py-2 font-bold text-sm">
                      2023 Milletvekilliği Seçim Bilgileri
                    </h1>
                    <span className="flex flex-col gap-4">
                      <button
                        onClick={() => setMvInputIsEnabled(!mvInputIsEnabled)}
                        className="btn btn-sm btn-warning"
                      >
                        {mvInputIsEnabled
                          ? "Düzenleme modunu kapa"
                          : "Düzenleme modunu aç"}
                      </button>
                      {mvInputIsEnabled && (
                        <button
                          onClick={() => updateNeighbourhoodFields("mv2023")}
                          className="btn btn-sm btn-info"
                        >
                          Kaydet
                        </button>
                      )}
                    </span>
                  </div>

                  <div className="flex gap-2  justify-between mx-5">
                    <label className="label">
                      <span className="label-text">MHP:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-sm input-bordered w-full  max-w-xs"
                      name="mhp2023mv_oysayisi"
                      value={formik.values.mhp2023mv_oysayisi}
                      onChange={formik.handleChange}
                      disabled={!mvInputIsEnabled}
                    />
                  </div>
                  {formik.errors.mhp2023mv_oysayisi && (
                    <p className="mt-0 text-red-500">
                      {formik.errors.mhp2023mv_oysayisi}
                    </p>
                  )}
                  <div className="flex gap-2  justify-between mx-5">
                    <label className="label">
                      <span className="label-text">AK PARTİ:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-sm input-bordered w-full max-w-xs"
                      name="akp2023mv_oysayisi"
                      value={formik.values.akp2023mv_oysayisi}
                      onChange={formik.handleChange}
                      disabled={!mvInputIsEnabled}
                    />
                  </div>
                  {formik.errors.akp2023mv_oysayisi && (
                    <p className="mt-0 text-red-500">
                      {formik.errors.akp2023mv_oysayisi}
                    </p>
                  )}
                  <div className="flex gap-2  justify-between mx-5">
                    <label className="label">
                      <span className="label-text">İYİ PARTİ:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-sm input-bordered w-full max-w-xs"
                      name="iyi2023mv_oysayisi"
                      value={formik.values.iyi2023mv_oysayisi}
                      onChange={formik.handleChange}
                      disabled={!mvInputIsEnabled}
                    />
                  </div>
                  {formik.errors.iyi2023mv_oysayisi && (
                    <p className="mt-0 text-red-500">
                      {formik.errors.iyi2023mv_oysayisi}
                    </p>
                  )}

                  <div className="flex gap-2  justify-between mx-5">
                    <label className="label">
                      <span className="label-text">CHP:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-sm input-bordered w-full max-w-xs"
                      name="chp2023mv_oysayisi"
                      value={formik.values.chp2023mv_oysayisi}
                      onChange={formik.handleChange}
                      disabled={!mvInputIsEnabled}
                    />
                  </div>
                  {formik.errors.chp2023mv_oysayisi && (
                    <p className="mt-0 text-red-500">
                      {formik.errors.chp2023mv_oysayisi}
                    </p>
                  )}
                  <div className="flex gap-2  justify-between mx-5">
                    <label className="label">
                      <span className="label-text">HDP:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-sm input-bordered w-full max-w-xs"
                      name="hdp2023mv_oysayisi"
                      value={formik.values.hdp2023mv_oysayisi}
                      onChange={formik.handleChange}
                      disabled={!mvInputIsEnabled}
                    />
                  </div>
                  {formik.errors.hdp2023mv_oysayisi && (
                    <p className="mt-0 text-red-500">
                      {formik.errors.hdp2023mv_oysayisi}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  2023 Cumhurbaşkanlığı Seçim Bilgileri
                </h1>
                <span className="flex gap-4 max-sm:flex-col">
                  <button
                    onClick={() => setCbInputIsEnabled(!cbInputIsEnabled)}
                    className="btn btn-warning"
                  >
                    {cbInputIsEnabled
                      ? "Düzenleme modunu kapa"
                      : "Düzenleme modunu aç"}
                  </button>
                  {cbInputIsEnabled && (
                    <button
                      onClick={() => updateNeighbourhoodFields("cb2023")}
                      className="btn btn-info"
                    >
                      Kaydet
                    </button>
                  )}
                </span>
              </div>
              <div className="join w-full flex justify-center gap-4 items-center mt-8 mb-8">
                <div className="flex gap-2 w-full max-w-xs join-item">
                  <label className="label">
                    <span className="label-text">CUMHUR İTTİFAKI:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    name="cumhur2023oy_sayisi"
                    value={formik.values.cumhur2023oy_sayisi}
                    onChange={formik.handleChange}
                    disabled={!cbInputIsEnabled}
                  />
                </div>
                {formik.errors.cumhur2023oy_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.cumhur2023oy_sayisi}
                  </p>
                )}
                <div className="flex gap-2 w-full max-w-xs join-item">
                  <label className="label">
                    <span className="label-text">MİLLET İTTİFAKI:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    name="millet2023oy_sayisi"
                    value={formik.values.millet2023oy_sayisi}
                    onChange={formik.handleChange}
                    disabled={!cbInputIsEnabled}
                  />
                </div>
                {formik.errors.millet2023oy_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.millet2023oy_sayisi}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  2019 Yerel Seçim Seçim Bilgileri
                </h1>
                <span className="flex gap-4 max-sm:flex-col">
                  <button
                    onClick={() =>
                      setBelediye2019InputIsEnabled(!belediye2019InputIsEnabled)
                    }
                    className="btn btn-warning"
                  >
                    {belediye2019InputIsEnabled
                      ? "Düzenleme modunu kapa"
                      : "Düzenleme modunu aç"}
                  </button>
                  {belediye2019InputIsEnabled && (
                    <button
                      onClick={() => updateNeighbourhoodFields("yerel2019")}
                      className="btn btn-info"
                    >
                      Kaydet
                    </button>
                  )}
                </span>
              </div>
              <div className="join w-full flex justify-center gap-4 items-center mt-8 mb-8">
                <div className="flex gap-2 w-full max-w-xs join-item">
                  <label className="label">
                    <span className="label-text">MHP:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    name="yerel2019mhp_oy_sayisi"
                    value={formik.values.yerel2019mhp_oy_sayisi}
                    onChange={formik.handleChange}
                    disabled={!belediye2019InputIsEnabled}
                  />
                </div>
                {formik.errors.yerel2019mhp_oy_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.yerel2019mhp_oy_sayisi}
                  </p>
                )}
                <div className="flex gap-2 w-full max-w-xs join-item">
                  <label className="label">
                    <span className="label-text">İYİ PARTİ:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    name="yerel2019iyi_oy_sayisi"
                    value={formik.values.yerel2019iyi_oy_sayisi}
                    onChange={formik.handleChange}
                    disabled={!belediye2019InputIsEnabled}
                  />
                </div>
                {formik.errors.yerel2019iyi_oy_sayisi && (
                  <p className="mt-0 text-red-500">
                    {formik.errors.yerel2019iyi_oy_sayisi}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  MAHALLE İLE İLGİLİ MÜDÜRLÜKLERİN NOTLARI
                </h1>
                <span className="flex max-sm:flex-col max-sm:flex gap-4">
                  <button
                    onClick={addNewManagerNote}
                    className="btn   btn-success"
                  >
                    YENİ KAYIT EKLE
                  </button>
                </span>
              </div>
              {managerNotes.length ? (
                managerNotes.map((managerNote) => (
                  <div
                    className="flex gap-4 mt-8 justify-center"
                    key={managerNote.id}
                  >
                    <span className="flex gap-4">
                      <button
                        className="btn btn-error"
                        onClick={() => deleteManagerNote(managerNote)}
                      >
                        Sil
                      </button>
                      {managerNote.id ? (
                        <>
                          <button
                            onClick={() => updateManagerNote(managerNote)}
                            className="btn btn-warning"
                          >
                            Güncelle
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => insertManagerNote(managerNote)}
                            className="btn btn-info"
                          >
                            Kaydet
                          </button>
                        </>
                      )}
                    </span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-2/3"
                      name="not"
                      value={managerNote.not}
                      onChange={(event) => {
                        setManagerNotes((prev) => {
                          let selected;
                          let selectedIndex;
                          if (managerNote.id) {
                            selectedIndex = prev.findIndex(
                              (n) => n.id == managerNote.id
                            );
                            selected = prev.find((n) => n.id == managerNote.id);
                          } else {
                            selectedIndex = prev.findIndex(
                              (n) => n.clientId == managerNote.clientId
                            );
                            selected = prev.find(
                              (n) => n.clientId == managerNote.clientId
                            );
                          }
                          prev[selectedIndex] = selected.id
                            ? {
                                id: selected.id,
                                not: event.target.value,
                                clientId: selected.clientId,
                              }
                            : {
                                not: event.target.value,
                                clientId: selected.clientId,
                              };
                          return [...prev];
                        });
                      }}
                    />
                  </div>
                ))
              ) : (
                <h1 className="text-xl font-bold">NOT YOK</h1>
              )}
            </div>
            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 mb-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  MAHALLE HALKININ TALEP VE GÖRÜŞLERİ
                </h1>
                <span className="flex max-sm:flex-col max-sm:flex gap-4">
                  <button
                    className="btn btn-success"
                    onClick={addNewPublicOpinion}
                  >
                    YENİ KAYIT EKLE
                  </button>
                </span>
              </div>
              {publicOpinions.length ? (
                publicOpinions.map((opinion) => (
                  <div
                    key={opinion.id}
                    className="flex gap-4 mt-8 justify-center"
                  >
                    <span className="flex gap-4">
                      <button
                        className="btn btn-error"
                        onClick={() => deletePublicOpinion(opinion)}
                      >
                        Sil
                      </button>
                      {opinion.id ? (
                        <>
                          <button
                            onClick={() => updateOpinion(opinion)}
                            className="btn btn-warning"
                          >
                            Güncelle
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => insertOpinion(opinion)}
                            className="btn btn-info"
                          >
                            Kaydet
                          </button>
                        </>
                      )}
                    </span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-2/3"
                      value={opinion.talep}
                      onChange={(event) => {
                        setPublicOpinions((prev) => {
                          let selected;
                          let selectedIndex;
                          if (opinion.id) {
                            selectedIndex = prev.findIndex(
                              (o) => o.id == opinion.id
                            );
                            selected = prev.find((o) => o.id == opinion.id);
                          } else {
                            selectedIndex = prev.findIndex(
                              (o) => o.clientId == opinion.clientId
                            );
                            selected = prev.find(
                              (o) => o.clientId == opinion.clientId
                            );
                          }

                          prev[selectedIndex] = selected.id
                            ? {
                                id: selected.id,
                                talep: event.target.value,
                                clientId: selected.clientId,
                              }
                            : {
                                talep: event.target.value,
                                clientId: selected.clientId,
                              };
                          return [...prev];
                        });
                      }}
                    />
                  </div>
                ))
              ) : (
                <h1 className="text-xl font-bold">TALEP ÖNERİ YOK</h1>
              )}
            </div>

            <div className="w-full">
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  FEN İŞLERİ YATIRIMLARI
                </h1>
                <span className="flex max-sm:flex-col max-sm:flex gap-4">
                  <button
                    onClick={() => addNewProject("fen")}
                    className="btn btn-success"
                  >
                    YENİ KAYIT EKLE
                  </button>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="table-xs ">
                  {/* head */}
                  <thead>
                    {projects.filter((proje) => proje.proje_tipi === "fen")
                      .length ? (
                      <>
                        <tr>
                          <th></th>
                          <th>İşin Adı</th>
                          <th>Mevkii</th>
                          <th>Yapım Yılı</th>
                          <th>Masraf</th>
                          <th>Hedef mt2</th>
                          <th>Gerçek mt2</th>
                          <th>Proje Detayı</th>
                          <th>Tamamlanma %</th>
                          <th>Durumu</th>
                        </tr>
                      </>
                    ) : (
                      <>
                        <th className="text-xl">PROJE YOK</th>
                      </>
                    )}
                  </thead>
                  <tbody>
                    {projects
                      .filter((proje) => proje.proje_tipi === "fen")
                      .map((fenProject) => {
                        return (
                          <>
                            <tr className="">
                              <th>
                                <span className="flex flex-col gap-1">
                                  <button
                                    onClick={() => deleteProject(fenProject)}
                                    className="btn btn-md btn-error"
                                  >
                                    SİL
                                  </button>
                                  {fenProject.id ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          updateProject(fenProject, "fen")
                                        }
                                        className="btn btn-md btn-warning"
                                      >
                                        Güncelle
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() =>
                                          insertProject(fenProject, "fen")
                                        }
                                        className="btn btn-md btn-info"
                                      >
                                        Kaydet
                                      </button>
                                    </>
                                  )}
                                </span>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.proje_adi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "proje_adi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.mevkii}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "mevkii"
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.yapim_yili}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "yapim_yili"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.masraf}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "masraf"
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.hedef_m2}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "hedef_m2"
                                    )
                                  }
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.gercek_m2}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "gercek_m2"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.proje_detayi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "proje_detayi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.tamamlanma_yuzdesi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "tamamlanma_yuzdesi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={fenProject.proje_durumu}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      fenProject,
                                      "proje_durumu"
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          </>
                        );
                      }) || (
                      <>
                        <tr>
                          <h1>Proje yok.</h1>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  FEN İŞLERİ DEVAM EDEN YATIRIMLARI
                </h1>
                <span className="flex max-sm:flex-col max-sm:flex gap-4">
                  <button
                    onClick={() => addNewProject("fen")}
                    className="btn btn-success"
                  >
                    YENİ KAYIT EKLE
                  </button>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="table-xs ">
                  {/* head */}
                  <thead>
                    {projects.filter(
                      (proje) =>
                        proje.proje_tipi === "fen" &&
                        proje.tamamlanma_yuzdesi != "100"
                    ).length ? (
                      <>
                        <tr>
                          <th></th>
                          <th>İşin Adı</th>
                          <th>Mevkii</th>
                          <th>Yapım Yılı</th>
                          <th>Masraf</th>
                          <th>Hedef mt2</th>
                          <th>Gerçek mt2</th>
                          <th>Proje Detayı</th>
                          <th>Tamamlanma %</th>
                          <th>Durumu</th>
                        </tr>
                      </>
                    ) : (
                      <>
                        <th className="text-xl">PROJE YOK</th>
                      </>
                    )}
                  </thead>
                  <tbody>
                    {projects
                      .filter(
                        (proje) =>
                          proje.tamamlanma_yuzdesi != "100" &&
                          proje.proje_tipi === "fen"
                      )
                      .map((devamProje) => {
                        return (
                          <>
                            <tr>
                              <th>
                                <span className="flex flex-col gap-1">
                                  <button
                                    onClick={() => deleteProject(devamProje)}
                                    className="btn btn-md btn-error"
                                  >
                                    SİL
                                  </button>
                                  {devamProje.id ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          updateProject(devamProje, "fen")
                                        }
                                        className="btn btn-md btn-warning"
                                      >
                                        Güncelle
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() =>
                                          insertProject(devamProje, "fen")
                                        }
                                        className="btn btn-md btn-info"
                                      >
                                        Kaydet
                                      </button>
                                    </>
                                  )}
                                </span>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.proje_adi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "proje_adi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.mevkii}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "mevkii"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.yapim_yili}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "yapim_yili"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.masraf}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "masraf"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.hedef_m2}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "hedef_m2"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.gercek_m2}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "gercek_m2"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.proje_detayi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "proje_detayi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.tamamlanma_yuzdesi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "tamamlanma_yuzdesi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={devamProje.proje_durumu}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      devamProje,
                                      "proje_durumu"
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          </>
                        );
                      }) || (
                      <>
                        <td>
                          <h1>Proje yok.</h1>
                        </td>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="w-full flex justify-between items-center p-2 mt-10 bg-orange-500">
                <h1 className="text-center py-2 font-bold text-sm">
                  PARK VE BAHÇELER TAMAMLANAN VE DEVAM EDEN YATIRIMLAR
                </h1>
                <span className="flex max-sm:flex-col max-sm:flex gap-4">
                  <button
                    onClick={() => addNewProject("parkbahce")}
                    className="btn btn-success"
                  >
                    YENİ KAYIT EKLE
                  </button>
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="table-xs ">
                  <thead>
                    {projects.filter((proje) => proje.proje_tipi == "parkbahce")
                      .length ? (
                      <>
                        <tr>
                          <th></th>
                          <th>İşin Adı</th>
                          <th>Mevkii</th>
                          <th>Parkın içeriği</th>
                          <th>Yapım Yılı</th>
                          <th>Masraf</th>
                          <th>mt2</th>
                          <th>Tamamlanma %</th>
                          <th>Durumu</th>
                        </tr>
                      </>
                    ) : (
                      <>
                        <th className="text-xl">PROJE YOK</th>
                      </>
                    )}
                  </thead>
                  <tbody>
                    {projects
                      .filter((proje) => proje.proje_tipi == "parkbahce")
                      .map((parkProje) => {
                        return (
                          <>
                            <tr>
                              <th>
                                <span className="flex flex-col gap-1">
                                  <button
                                    onClick={() => deleteProject(parkProje)}
                                    className="btn btn-error"
                                  >
                                    SİL
                                  </button>
                                  {parkProje.id ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          updateProject(parkProje, "parkbahce")
                                        }
                                        className="btn btn-warning"
                                      >
                                        Güncelle
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() =>
                                          insertProject(parkProje, "parkbahce")
                                        }
                                        className="btn btn-info"
                                      >
                                        Kaydet
                                      </button>
                                    </>
                                  )}
                                </span>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.proje_adi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "proje_adi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.mevkii}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "mevkii"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.proje_detayi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "proje_detayi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.yapim_yili}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "yapim_yili"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.masraf}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "masraf"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.gercek_m2}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "gercek_m2"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.tamamlanma_yuzdesi}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "tamamlanma_yuzdesi"
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  placeholder="Type here"
                                  className="input input-bordered input-xs"
                                  value={parkProje.proje_durumu}
                                  onChange={() =>
                                    handleFenInputChange(
                                      event,
                                      parkProje,
                                      "proje_durumu"
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          </>
                        );
                      }) || (
                      <>
                        <h1>Proje yok.</h1>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
