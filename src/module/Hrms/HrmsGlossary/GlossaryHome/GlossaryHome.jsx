import { useState,useEffect,useMemo,useCallback} from "react";
import GlossaryLetterNav from "../GlossaryComponent/GlossaryLetterNav";
import GlossarySection from "../GlossaryComponent/GlossarySection";
import SearchBar from "../GlossaryComponent/SearchBar";
import {Button,Col,Container,Row} from "react-bootstrap";
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import { GlosssaryHomeSchema } from "./GlosssaryHomeSchema";
import { getGlossary } from "../../../../services/GlossaryService";

const GlossaryHomeMeta = {
  title: "HR Glossary: A-Z of HR Terms & Definitions | QkrHR",
  description: "Explore the comprehensive QkrHR HR glossary. Find clear definitions, terms, and explanations for essential HR, payroll, labor law, and compliance concepts.",
};
import "./GlossaryHome.scss";

const GlossaryHome = ({initialGlossaryData = []}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  /* ======== NORMALIZE SSR DATA ========= */
  const normalizeData = (data) => {
    if (!data) return {};
    /* If array → convert to grouped */
    if (Array.isArray(data)) {
      const grouped = {};
      data.forEach((item) => {
        if (!item?.GlossaryTitle) return;
        const letter = item.GlossaryTitle.charAt(0).toUpperCase();
        if (!grouped[letter]) { grouped[letter] = [];}
        grouped[letter].push(item);
      });
      return grouped;
    }
    /* Already grouped */
    return data;
  };

  /* ============STATE============ */
  const [glossary, setGlossary] = useState(normalizeData(initialGlossaryData));
  const [hasFetched, setHasFetched] = useState( Object.keys(normalizeData(initialGlossaryData)).length > 0);
  const [error, setError] = useState(null);

  /* ========= LOADING ========== */
  const loading = Object.keys(glossary || {}).length === 0 && !hasFetched;

  /* ======== SSR SYNC ========== */
  useEffect(() => {
    const normalized = normalizeData( initialGlossaryData);
    if ( Object.keys(normalized).length === 0) return;
    setGlossary(normalized);
    setHasFetched(true);
    setError(null);
  }, [initialGlossaryData]);

  /* ======= FETCH CLIENT ======= */
  const fetchGlossary = useCallback(async () => {
      try {
        setError(null);
        const data = await getGlossary();
        const normalized = normalizeData(data);
        setGlossary( normalized || {});
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load glossary");
      } finally {
        setHasFetched(true);
      }
  }, []);

  useEffect(() => {
    if ( Object.keys( glossary || {}).length > 0)return;
    fetchGlossary();
  }, [fetchGlossary]);

  /* ======== SORT A–Z ========== */
  const sortedGlossary = useMemo(() => {
      if (!glossary) return [];
      return Object.entries(glossary).sort(([a], [b]) => a.localeCompare(b));
  }, [glossary]);

  /* ======== LETTER CLICK ======== */
  const handleLetterClick = (letter) => { setSelectedLetter(letter);};

  /* ======== SCROLL ========= */
  useEffect(() => {
    if (typeof window === "undefined" ||!selectedLetter)return;
    const section = document.getElementById(`section-${selectedLetter}`);
    if (!section) return;
    const yOffset = -80;
    const y =section.getBoundingClientRect().top + window.pageYOffset +yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }, [selectedLetter]);

  return (
    <>
      <RouteSpecificMeta
      title={GlossaryHomeMeta.title}
      description={GlossaryHomeMeta.description}
      SchemaData={
        GlosssaryHomeSchema
      }
      />
      <div className="glossary-wrapper">
        {/* HEADER */}
        <div className="hr-glossary">
          <Container>
            <Row>
              <Col lg={12}>
                <h1 className="text-center text-gradient"> HR Glossary</h1>
                <SearchBar value={searchTerm}onChange={setSearchTerm}/>
                <GlossaryLetterNav onClick={handleLetterClick} glossaryData={glossary}/>
              </Col>
            </Row>
          </Container>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center">Loading...</p>
        )}

        {/* ERROR */}
        {error && (
          <div className="text-center">
            <p className="text-danger">{error}</p>
            <Button variant="outline-danger" size="sm"
              onClick={() => {
                setHasFetched(false);
                fetchGlossary();
              }}
            > Retry
            </Button>
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          !error &&
          sortedGlossary.length === 0 && (
            <p className="text-center text-muted py-5">No glossary terms available.</p>
          )}
        {/* SECTIONS */}
        <div className="glossary-content">
          <Container>
            {sortedGlossary.map(
              ([letter, items], idx) => (
                <GlossarySection
                  key={letter}
                  letter={letter}
                  items={items}
                  searchTerm={searchTerm}
                  index={idx}
                />
              )
            )}
          </Container>
        </div>
      </div>
    </>
  );

};

export default GlossaryHome;