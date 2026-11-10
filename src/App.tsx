import { useEffect, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1588106832140-87523dd73ed0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400";
const impactImage =
  "https://images.unsplash.com/photo-1610093641855-31ffd617a94a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";

type IconName =
  | "leaf"
  | "arrow"
  | "menu"
  | "close"
  | "pin"
  | "search"
  | "plastic"
  | "glass"
  | "paper"
  | "battery"
  | "box"
  | "gift"
  | "chart"
  | "check"
  | "route"
  | "instagram"
  | "linkedin"
  | "home"
  | "target"
  | "user"
  | "logout"
  | "clock"
  | "bell"
  | "ticket"
  | "coffee"
  | "heart"
  | "star";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    leaf: (
      <>
        <path d="M20.6 3.4C14 3.2 7 5.2 4.4 10.7c-1.7 3.6-.1 6.8 2.5 8.1 2.8 1.4 6.4.3 8-3.2 1.3-2.8 1.2-5.4 5.7-12.2Z" />
        <path d="M3 21c2.7-5.4 6.8-8.8 12.8-11.3" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    plastic: (
      <>
        <path d="M9 3h6v4l2 3v10H7V10l2-3Z" />
        <path d="M9 7h6M9 13h6" />
      </>
    ),
    glass: (
      <>
        <path d="M7 3h10l-1.5 8a3.6 3.6 0 0 1-7 0Z" />
        <path d="M12 14v7M8 21h8" />
      </>
    ),
    paper: (
      <>
        <path d="M6 3h9l3 3v15H6Z" />
        <path d="M14 3v5h4M9 12h6M9 16h6" />
      </>
    ),
    battery: (
      <>
        <rect x="5" y="5" width="14" height="16" rx="2" />
        <path d="M9 2h6M13 9l-3 5h4l-3 4" />
      </>
    ),
    box: (
      <>
        <path d="m4 8 8-4 8 4-8 4Z" />
        <path d="M4 8v9l8 4 8-4V8M12 12v9" />
      </>
    ),
    gift: (
      <>
        <rect x="3" y="9" width="18" height="12" rx="2" />
        <path d="M3 13h18M12 9v12" />
        <path d="M12 9H8.5A2.5 2.5 0 1 1 11 6.5Zm0 0h3.5A2.5 2.5 0 1 0 13 6.5Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    route: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18c7 0 1-12 8-12" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    logout: (
      <>
        <path d="M10 4H4v16h6M14 8l4 4-4 4M8 12h10" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    ticket: (
      <>
        <path d="M4 7a2 2 0 0 1 2-2h14v4a3 3 0 0 0 0 6v4H6a2 2 0 0 1-2-2Z" />
        <path d="M13 8v2M13 14v2" />
      </>
    ),
    coffee: (
      <>
        <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 4v1M12 3v2" />
      </>
    ),
    heart: (
      <path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />,
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const wasteTypes = [
  { name: "Plástico", icon: "plastic" as IconName, color: "#eaac21" },
  { name: "Vidro", icon: "glass" as IconName, color: "#22a266" },
  { name: "Papel", icon: "paper" as IconName, color: "#4799df" },
  { name: "Eletrônicos", icon: "battery" as IconName, color: "#815fc5" },
];

const points = [
  {
    name: "Estação Verde Paulista",
    distance: "350 m",
    type: "Plástico, vidro e papel",
    x: "35%",
    y: "38%",
    address: "Al. Santos, 1.415 — Jardim Paulista",
    hours: "Aberto até 20h",
    reward: "+80 EcoPontos",
  },
  {
    name: "Coleta Jardim Europa",
    distance: "1,2 km",
    type: "Eletrônicos e pilhas",
    x: "65%",
    y: "54%",
    address: "R. Groenlândia, 448 — Jardim Europa",
    hours: "Aberto até 18h",
    reward: "+120 EcoPontos",
  },
  {
    name: "EcoPonto Central",
    distance: "2,4 km",
    type: "Todos os materiais",
    x: "50%",
    y: "70%",
    address: "R. da Consolação, 1.900 — Consolação",
    hours: "Aberto 24 horas",
    reward: "+100 EcoPontos",
  },
  {
    name: "Recicla Vila Madalena",
    distance: "3,1 km",
    type: "Plástico, papel e vidro",
    x: "22%",
    y: "63%",
    address: "R. Harmonia, 221 — Vila Madalena",
    hours: "Aberto até 19h",
    reward: "+70 EcoPontos",
  },
  {
    name: "Ponto Circular Pinheiros",
    distance: "3,8 km",
    type: "Eletrônicos, pilhas e vidro",
    x: "78%",
    y: "29%",
    address: "R. dos Pinheiros, 988 — Pinheiros",
    hours: "Fecha em 45 min",
    reward: "+110 EcoPontos",
  },
];

function CollectionMap({ onToast }: { onToast: (message: string) => void }) {
  const [material, setMaterial] = useState("Todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [listOpen, setListOpen] = useState(true);

  const filteredPoints = points.filter((point) => {
    const matchesQuery =
      point.name.toLowerCase().includes(query.toLowerCase()) ||
      point.address.toLowerCase().includes(query.toLowerCase());
    const matchesMaterial =
      material === "Todos" ||
      point.type.toLowerCase().includes(material.toLowerCase()) ||
      point.type === "Todos os materiais";
    return matchesQuery && matchesMaterial;
  });

  const selectedPoint = points[selected];

  return (
    <section className="collection-page">
      <div className="collection-page-heading">
        <div>
          <div className="eyebrow">
            <span /> Descarte perto de você
          </div>
          <h1>
            Encontre seu próximo <em>EcoSpot.</em>
          </h1>
          <p>Explore os pontos de coleta, veja os materiais aceitos e escolha a melhor rota.</p>
        </div>
        <button
          className="primary-btn collection-locate"
          onClick={() => onToast("Localização atualizada: São Paulo, SP")}
        >
          <Icon name="route" size={18} /> Usar minha localização
        </button>
      </div>

      <div className="collection-toolbar dashboard-panel">
        <label className="collection-search">
          <Icon name="search" size={19} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busque por endereço, bairro ou EcoSpot"
          />
          {query && (
            <button aria-label="Limpar busca" onClick={() => setQuery("")}>
              <Icon name="close" size={15} />
            </button>
          )}
        </label>
        <div className="collection-filters">
          {["Todos", "Plástico", "Vidro", "Papel", "Eletrônicos"].map((item) => (
            <button
              key={item}
              className={material === item ? "active" : ""}
              onClick={() => setMaterial(item)}
            >
              {item !== "Todos" && (
                <span
                  style={{
                    background:
                      wasteTypes.find((waste) => waste.name === item)?.color ?? "var(--green)",
                  }}
                />
              )}
              {item}
            </button>
          ))}
        </div>
        <button className="collection-more" onClick={() => onToast("Filtros avançados abertos")}>
          <Icon name="target" size={16} /> Mais filtros
        </button>
      </div>

      <div className="collection-layout">
        <aside className={listOpen ? "collection-results open" : "collection-results"}>
          <div className="collection-results-title">
            <div>
              <span>RESULTADOS PRÓXIMOS</span>
              <strong>{filteredPoints.length} EcoSpots encontrados</strong>
            </div>
            <button
              className="collection-list-toggle"
              aria-label="Ocultar lista"
              onClick={() => setListOpen(false)}
            >
              <Icon name="close" size={17} />
            </button>
          </div>
          <div className="collection-result-list">
            {filteredPoints.length ? (
              filteredPoints.map((point) => {
                const pointIndex = points.indexOf(point);
                return (
                  <button
                    key={point.name}
                    className={
                      selected === pointIndex ? "collection-result active" : "collection-result"
                    }
                    onClick={() => setSelected(pointIndex)}
                  >
                    <span className="collection-result-number">
                      {String(pointIndex + 1).padStart(2, "0")}
                    </span>
                    <div className="collection-result-copy">
                      <div className="collection-result-status">
                        <span />
                        {point.hours.toUpperCase()}
                      </div>
                      <strong>{point.name}</strong>
                      <p>{point.address}</p>
                      <div className="collection-materials">
                        {point.type
                          .split(",")
                          .slice(0, 3)
                          .map((type) => (
                            <span key={type}>{type.trim()}</span>
                          ))}
                      </div>
                    </div>
                    <div className="collection-result-meta">
                      <b>{point.distance}</b>
                      <small>{point.reward}</small>
                      <Icon name="arrow" size={15} />
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="collection-empty">
                <span>
                  <Icon name="search" size={23} />
                </span>
                <strong>Nenhum EcoSpot encontrado</strong>
                <p>Tente buscar outro endereço ou remover algum filtro.</p>
                <button
                  onClick={() => {
                    setMaterial("Todos");
                    setQuery("");
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </aside>

        <div className="collection-map-canvas">
          {!listOpen && (
            <button className="show-results" onClick={() => setListOpen(true)}>
              <Icon name="search" size={16} /> Ver resultados
            </button>
          )}
          <div className="map-pattern street-one" />
          <div className="map-pattern street-two" />
          <div className="map-pattern street-three" />
          <div className="collection-park park-a">
            <Icon name="leaf" size={18} />
            <span>PARQUE TRIANON</span>
          </div>
          <div className="collection-park park-b" />
          <span className="map-street-label street-label-a">AVENIDA PAULISTA</span>
          <span className="map-street-label street-label-b">RUA DA CONSOLAÇÃO</span>
          <span className="map-street-label street-label-c">AVENIDA REBOUÇAS</span>

          {points.map((point, index) => (
            <button
              key={point.name}
              aria-label={`Selecionar ${point.name}`}
              className={selected === index ? "collection-map-pin selected" : "collection-map-pin"}
              style={{ left: point.x, top: point.y }}
              onClick={() => setSelected(index)}
            >
              <Icon name="pin" size={18} />
              <span>{index + 1}</span>
            </button>
          ))}
          <div className="collection-current">
            <span />
            <small>Você está aqui</small>
          </div>

          <div className="map-controls">
            <button aria-label="Aumentar zoom" onClick={() => onToast("Zoom aumentado")}>
              +
            </button>
            <button aria-label="Diminuir zoom" onClick={() => onToast("Zoom reduzido")}>
              −
            </button>
            <button
              aria-label="Centralizar localização"
              onClick={() => onToast("Mapa centralizado na sua localização")}
            >
              <Icon name="route" size={17} />
            </button>
          </div>

          <div className="selected-collection-card">
            <button
              className="selected-card-close"
              aria-label="Fechar detalhes"
              onClick={() => setListOpen(true)}
            >
              <Icon name="close" size={14} />
            </button>
            <div className="selected-card-top">
              <span>
                <i /> {selectedPoint.hours}
              </span>
              <b>{selectedPoint.distance}</b>
            </div>
            <h2>{selectedPoint.name}</h2>
            <p>{selectedPoint.address}</p>
            <div className="selected-card-materials">
              <Icon name="box" size={16} />
              <span>{selectedPoint.type}</span>
            </div>
            <div className="selected-card-footer">
              <span>
                <Icon name="gift" size={16} /> {selectedPoint.reward}
              </span>
              <button onClick={() => onToast(`Rota para ${selectedPoint.name} iniciada`)}>
                Ver rota <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecyclingTracking({ onToast }: { onToast: (message: string) => void }) {
  const [period, setPeriod] = useState("6 meses");
  const [historyFilter, setHistoryFilter] = useState("Todos");
  const [selectedMonth, setSelectedMonth] = useState(5);
  const chartData = [
    { month: "Mar", value: 12.4, paper: 4.2, plastic: 4.8, glass: 3.4 },
    { month: "Abr", value: 16.8, paper: 5.7, plastic: 6.1, glass: 5 },
    { month: "Mai", value: 14.1, paper: 4.4, plastic: 5.8, glass: 3.9 },
    { month: "Jun", value: 21.6, paper: 7.2, plastic: 8.1, glass: 6.3 },
    { month: "Jul", value: 20.9, paper: 6.4, plastic: 8.8, glass: 5.7 },
    { month: "Ago", value: 24.8, paper: 8.1, plastic: 10.2, glass: 6.5 },
  ];
  const history = [
    {
      date: "18 AGO",
      title: "Estação Verde Paulista",
      material: "Plástico",
      weight: "3,2 kg",
      points: "+120",
      icon: "plastic" as IconName,
      color: "#e7b343",
    },
    {
      date: "12 AGO",
      title: "EcoPonto Central",
      material: "Papel",
      weight: "5,8 kg",
      points: "+180",
      icon: "paper" as IconName,
      color: "#4799df",
    },
    {
      date: "06 AGO",
      title: "Coleta Jardim Europa",
      material: "Eletrônicos",
      weight: "2,1 kg",
      points: "+240",
      icon: "battery" as IconName,
      color: "#815fc5",
    },
    {
      date: "29 JUL",
      title: "Recicla Vila Madalena",
      material: "Vidro",
      weight: "6,4 kg",
      points: "+160",
      icon: "glass" as IconName,
      color: "#4d9f67",
    },
  ];
  const visibleHistory =
    historyFilter === "Todos" ? history : history.filter((item) => item.material === historyFilter);

  return (
    <section className="tracking-page">
      <div className="tracking-heading">
        <div>
          <div className="eyebrow">
            <span /> Sua jornada sustentável
          </div>
          <h1>
            Acompanhe seu <em>progresso.</em>
          </h1>
          <p>Veja como cada descarte se transforma em impacto positivo ao longo do tempo.</p>
        </div>
        <div className="period-control">
          <span>PERÍODO</span>
          <div>
            {["30 dias", "6 meses", "1 ano"].map((item) => (
              <button
                key={item}
                className={period === item ? "active" : ""}
                onClick={() => setPeriod(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="tracking-summary">
        <article className="tracking-total-card">
          <div>
            <span className="tracking-card-icon">
              <Icon name="box" size={21} />
            </span>
            <span className="tracking-card-label">TOTAL RECICLADO</span>
          </div>
          <strong>
            110,6 <small>kg</small>
          </strong>
          <p>
            <b>↑ 22%</b> em relação ao período anterior
          </p>
          <div className="tracking-card-art">
            <Icon name="leaf" size={145} />
          </div>
        </article>
        {[
          {
            icon: "chart" as IconName,
            tone: "green",
            label: "MÉDIA MENSAL",
            value: "18,4",
            unit: "kg",
            note: "3,8 kg acima da sua média",
          },
          {
            icon: "clock" as IconName,
            tone: "amber",
            label: "DESCARTES REALIZADOS",
            value: "18",
            unit: "",
            note: "Sequência de 4 semanas ativa",
          },
          {
            icon: "gift" as IconName,
            tone: "violet",
            label: "PONTOS CONQUISTADOS",
            value: "1.280",
            unit: "",
            note: "720 para o próximo nível",
          },
        ].map((stat) => (
          <article className="tracking-stat-card dashboard-panel" key={stat.label}>
            <span className={`tracking-card-icon ${stat.tone}`}>
              <Icon name={stat.icon} size={21} />
            </span>
            <div>
              <span>{stat.label}</span>
              <strong>
                {stat.value} {stat.unit && <small>{stat.unit}</small>}
              </strong>
              <p>{stat.note}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="tracking-main-grid">
        <article className="tracking-chart-panel dashboard-panel">
          <div className="panel-title">
            <div>
              <span>EVOLUÇÃO</span>
              <h2>Materiais reciclados</h2>
            </div>
            <div className="chart-legend">
              <span>
                <i className="paper" /> Papel
              </span>
              <span>
                <i className="plastic" /> Plástico
              </span>
              <span>
                <i className="glass" /> Vidro e outros
              </span>
            </div>
          </div>
          <div className="tracking-chart">
            <div className="chart-y-axis">
              <span>30 kg</span>
              <span>20 kg</span>
              <span>10 kg</span>
              <span>0</span>
            </div>
            <div className="chart-grid-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="tracking-bars">
              {chartData.map((item, index) => (
                <button
                  key={item.month}
                  className={selectedMonth === index ? "active" : ""}
                  onClick={() => setSelectedMonth(index)}
                >
                  <span className="chart-tooltip">
                    <strong>{item.value} kg</strong>
                    <small>Total em {item.month}</small>
                  </span>
                  <div className="stacked-bar" style={{ height: `${item.value * 7.5}px` }}>
                    <i
                      className="paper"
                      style={{ height: `${(item.paper / item.value) * 100}%` }}
                    />
                    <i
                      className="plastic"
                      style={{ height: `${(item.plastic / item.value) * 100}%` }}
                    />
                    <i
                      className="glass"
                      style={{ height: `${(item.glass / item.value) * 100}%` }}
                    />
                  </div>
                  <b>{item.month}</b>
                </button>
              ))}
            </div>
          </div>
          <div className="chart-insight">
            <span>
              <Icon name="leaf" size={17} />
            </span>
            <p>
              <strong>Seu melhor mês até agora!</strong>Em agosto você reciclou 18% a mais que no
              mês anterior.
            </p>
          </div>
        </article>

        <article className="material-breakdown dashboard-panel">
          <div className="panel-title">
            <div>
              <span>COMPOSIÇÃO</span>
              <h2>Por material</h2>
            </div>
          </div>
          <div className="material-donut">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="45" pathLength="100" />
              <circle className="donut-plastic" cx="60" cy="60" r="45" pathLength="100" />
              <circle className="donut-paper" cx="60" cy="60" r="45" pathLength="100" />
              <circle className="donut-glass" cx="60" cy="60" r="45" pathLength="100" />
              <circle className="donut-electronic" cx="60" cy="60" r="45" pathLength="100" />
            </svg>
            <div>
              <strong>110,6</strong>
              <span>KG NO TOTAL</span>
            </div>
          </div>
          <div className="breakdown-list">
            {[
              { name: "Plástico", value: "42,8 kg", percent: "39%", color: "#e7b343" },
              { name: "Papel", value: "31,5 kg", percent: "28%", color: "#4799df" },
              { name: "Vidro", value: "24,2 kg", percent: "22%", color: "#4d9f67" },
              { name: "Eletrônicos", value: "12,1 kg", percent: "11%", color: "#815fc5" },
            ].map((item) => (
              <div key={item.name}>
                <i style={{ background: item.color }} />
                <span>{item.name}</span>
                <strong>{item.value}</strong>
                <b>{item.percent}</b>
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="impact-equivalents">
        <div className="impact-equivalents-heading">
          <div>
            <span>SEU IMPACTO EM PERSPECTIVA</span>
            <h2>O que seus descartes representam</h2>
          </div>
          <p>Estimativas baseadas na economia gerada pela reciclagem dos seus materiais.</p>
        </div>
        <div className="equivalent-grid">
          {[
            {
              icon: "leaf" as IconName,
              value: "42,6 kg",
              label: "de CO₂ evitados",
              note: "equivalente a 178 km de carro",
            },
            {
              icon: "glass" as IconName,
              value: "1.840 L",
              label: "de água economizados",
              note: "cerca de 12 banhos completos",
            },
            {
              icon: "battery" as IconName,
              value: "86 kWh",
              label: "de energia poupados",
              note: "7 dias de uma residência",
            },
            {
              icon: "paper" as IconName,
              value: "5 árvores",
              label: "preservadas",
              note: "graças ao papel reciclado",
            },
          ].map((item) => (
            <article key={item.label}>
              <span>
                <Icon name={item.icon} size={21} />
              </span>
              <div>
                <strong>{item.value}</strong>
                <b>{item.label}</b>
                <small>{item.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <article className="tracking-history dashboard-panel">
        <div className="history-header">
          <div className="panel-title">
            <div>
              <span>ATIVIDADE RECENTE</span>
              <h2>Histórico de descartes</h2>
            </div>
          </div>
          <div className="history-filters">
            {["Todos", "Plástico", "Papel", "Vidro", "Eletrônicos"].map((item) => (
              <button
                key={item}
                className={historyFilter === item ? "active" : ""}
                onClick={() => setHistoryFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="history-table">
          <div className="history-table-head">
            <span>DATA</span>
            <span>PONTO DE COLETA</span>
            <span>MATERIAL</span>
            <span>PESO</span>
            <span>ECOPONTOS</span>
            <span />
          </div>
          {visibleHistory.map((item) => (
            <button
              className="history-row"
              key={`${item.date}-${item.material}`}
              onClick={() => onToast(`Detalhes do descarte em ${item.title} abertos`)}
            >
              <span className="history-date">{item.date}</span>
              <span className="history-location">
                <i style={{ color: item.color, background: `${item.color}18` }}>
                  <Icon name={item.icon} size={17} />
                </i>
                <strong>{item.title}</strong>
              </span>
              <span className="history-material">{item.material}</span>
              <strong className="history-weight">{item.weight}</strong>
              <strong className="history-points">{item.points}</strong>
              <Icon name="arrow" size={15} />
            </button>
          ))}
        </div>
        <button className="history-more" onClick={() => onToast("Histórico completo carregado")}>
          Carregar mais descartes <Icon name="arrow" size={14} />
        </button>
      </article>
    </section>
  );
}

const rewardOptions = [
  {
    id: 1,
    title: "Café orgânico + cookie",
    partner: "Casa Grão",
    category: "Gastronomia",
    points: 450,
    icon: "coffee" as IconName,
    tone: "amber",
    tag: "MAIS RESGATADO",
  },
  {
    id: 2,
    title: "20% em produtos naturais",
    partner: "Raiz Mercado",
    category: "Compras",
    points: 600,
    icon: "leaf" as IconName,
    tone: "green",
    tag: "PARCEIRO ECOSPOT",
  },
  {
    id: 3,
    title: "Ingresso para cinema",
    partner: "Cine Reserva",
    category: "Experiências",
    points: 900,
    icon: "ticket" as IconName,
    tone: "blue",
    tag: "VAGAS LIMITADAS",
  },
  {
    id: 4,
    title: "Plante uma árvore nativa",
    partner: "Instituto Verdejar",
    category: "Doações",
    points: 350,
    icon: "heart" as IconName,
    tone: "forest",
    tag: "IMPACTO DIRETO",
  },
  {
    id: 5,
    title: "Ecobag de algodão",
    partner: "Circular Store",
    category: "Compras",
    points: 750,
    icon: "gift" as IconName,
    tone: "violet",
    tag: "EDIÇÃO EXCLUSIVA",
  },
  {
    id: 6,
    title: "Workshop de compostagem",
    partner: "Horta Urbana SP",
    category: "Experiências",
    points: 1600,
    icon: "leaf" as IconName,
    tone: "lime",
    tag: "NOVA EXPERIÊNCIA",
  },
];

function RewardsSystem({ onToast }: { onToast: (message: string) => void }) {
  const [balance, setBalance] = useState(1280);
  const [category, setCategory] = useState("Todos");
  const [selectedReward, setSelectedReward] = useState<(typeof rewardOptions)[number] | null>(null);
  const [redeemed, setRedeemed] = useState<number[]>([]);
  const [activity, setActivity] = useState([
    {
      icon: "plastic" as IconName,
      title: "Descarte de plástico",
      date: "18 AGO · 14:32",
      value: 120,
    },
    {
      icon: "paper" as IconName,
      title: "Desafio semanal concluído",
      date: "16 AGO · 09:10",
      value: 200,
    },
    { icon: "gift" as IconName, title: "Ecobag de algodão", date: "02 AGO · 17:45", value: -750 },
  ]);

  const visibleRewards =
    category === "Todos"
      ? rewardOptions
      : rewardOptions.filter((reward) => reward.category === category);

  const confirmRedemption = () => {
    if (!selectedReward || selectedReward.points > balance || redeemed.includes(selectedReward.id))
      return;
    setBalance((current) => current - selectedReward.points);
    setRedeemed((current) => [...current, selectedReward.id]);
    setActivity((current) => [
      {
        icon: selectedReward.icon,
        title: selectedReward.title,
        date: "AGORA · RESGATE",
        value: -selectedReward.points,
      },
      ...current,
    ]);
    onToast(`${selectedReward.title} resgatado! Cupom disponível na sua carteira.`);
    setSelectedReward(null);
  };

  return (
    <section className="rewards-page">
      <div className="rewards-heading">
        <div>
          <div className="eyebrow">
            <span /> Seu impacto vale mais
          </div>
          <h1>
            Pontos que viram <em>boas escolhas.</em>
          </h1>
          <p>Troque seus EcoPontos por experiências, benefícios e impacto positivo.</p>
        </div>
        <button
          className="rewards-wallet-button"
          onClick={() => onToast("Carteira de cupons aberta")}
        >
          <Icon name="ticket" size={17} />
          Minha carteira
          <span>3</span>
        </button>
      </div>

      <div className="rewards-overview">
        <article className="rewards-balance-card">
          <div className="rewards-balance-top">
            <span>
              <Icon name="gift" size={18} /> SALDO DISPONÍVEL
            </span>
            <b>GUARDIÃO VERDE</b>
          </div>
          <strong>{balance.toLocaleString("pt-BR")}</strong>
          <small>ECOPONTOS</small>
          <div className="rewards-level">
            <div>
              <span>Seu próximo nível</span>
              <b>{Math.max(0, 2000 - balance).toLocaleString("pt-BR")} pontos restantes</b>
            </div>
            <div className="rewards-level-track">
              <i style={{ width: `${Math.min(100, (balance / 2000) * 100)}%` }} />
            </div>
            <div className="rewards-level-labels">
              <span>Guardião Verde</span>
              <span>Embaixador Eco</span>
            </div>
          </div>
          <Icon name="leaf" size={210} />
        </article>

        <article className="earn-points dashboard-panel">
          <div className="panel-title">
            <div>
              <span>CONTINUE ACUMULANDO</span>
              <h2>Como ganhar mais pontos</h2>
            </div>
          </div>
          <div className="earn-points-list">
            {[
              {
                icon: "box" as IconName,
                title: "Registre um descarte",
                text: "A cada quilo reciclado",
                value: "ATÉ +120",
              },
              {
                icon: "target" as IconName,
                title: "Complete desafios",
                text: "Novas metas toda semana",
                value: "+200",
              },
              {
                icon: "route" as IconName,
                title: "Mantenha sua sequência",
                text: "Você está há 4 semanas",
                value: "+80",
              },
            ].map((item) => (
              <button key={item.title} onClick={() => onToast(`${item.title}: detalhes abertos`)}>
                <span>
                  <Icon name={item.icon} size={19} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </div>
                <b>{item.value}</b>
                <Icon name="arrow" size={14} />
              </button>
            ))}
          </div>
        </article>
      </div>

      <section className="reward-catalog">
        <div className="reward-catalog-header">
          <div>
            <span>BENEFÍCIOS PARA VOCÊ</span>
            <h2>Explore as recompensas</h2>
          </div>
          <div className="reward-filters">
            {["Todos", "Gastronomia", "Compras", "Experiências", "Doações"].map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="reward-grid">
          {visibleRewards.map((reward) => {
            const isRedeemed = redeemed.includes(reward.id);
            const canRedeem = reward.points <= balance;
            return (
              <article className="reward-card" key={reward.id}>
                <div className={`reward-card-visual ${reward.tone}`}>
                  <span>{reward.tag}</span>
                  <Icon name={reward.icon} size={48} />
                  <i />
                </div>
                <div className="reward-card-copy">
                  <span>{reward.category.toUpperCase()}</span>
                  <h3>{reward.title}</h3>
                  <p>
                    por <strong>{reward.partner}</strong>
                  </p>
                  <div>
                    <b>
                      {reward.points.toLocaleString("pt-BR")} <small>ECOPONTOS</small>
                    </b>
                    <button
                      className={isRedeemed ? "redeemed" : ""}
                      disabled={isRedeemed}
                      onClick={() =>
                        canRedeem
                          ? setSelectedReward(reward)
                          : onToast(
                              `Faltam ${(reward.points - balance).toLocaleString("pt-BR")} EcoPontos para esta recompensa.`,
                            )
                      }
                    >
                      {isRedeemed ? (
                        <>
                          <Icon name="check" size={14} /> Resgatado
                        </>
                      ) : canRedeem ? (
                        <>
                          Resgatar <Icon name="arrow" size={13} />
                        </>
                      ) : (
                        `Faltam ${(reward.points - balance).toLocaleString("pt-BR")}`
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="rewards-bottom">
        <article className="rewards-history dashboard-panel">
          <div className="panel-title">
            <div>
              <span>EXTRATO DE ECOPONTOS</span>
              <h2>Atividade recente</h2>
            </div>
            <button onClick={() => onToast("Extrato completo aberto")}>
              Ver extrato <Icon name="arrow" size={14} />
            </button>
          </div>
          <div className="rewards-activity-list">
            {activity.slice(0, 4).map((item, index) => (
              <div key={`${item.title}-${index}`}>
                <span className={item.value > 0 ? "earned" : "spent"}>
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.date}</small>
                </div>
                <b className={item.value > 0 ? "positive" : ""}>
                  {item.value > 0 ? "+" : ""}
                  {item.value.toLocaleString("pt-BR")}
                </b>
              </div>
            ))}
          </div>
        </article>
        <article className="rewards-impact-card">
          <span>
            <Icon name="heart" size={20} />
          </span>
          <div>
            <small>IMPACTO COLETIVO</small>
            <h2>Recompensar também pode transformar.</h2>
            <p>
              A comunidade EcoSpot já destinou <strong>2,4 milhões de pontos</strong> para projetos
              ambientais.
            </p>
            <button onClick={() => setCategory("Doações")}>
              Conhecer projetos <Icon name="arrow" size={14} />
            </button>
          </div>
        </article>
      </div>

      {selectedReward && (
        <div className="reward-modal-backdrop" onMouseDown={() => setSelectedReward(null)}>
          <div
            className="reward-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reward-confirm-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="reward-confirm-close"
              aria-label="Fechar"
              onClick={() => setSelectedReward(null)}
            >
              <Icon name="close" size={18} />
            </button>
            <span className={`reward-confirm-icon ${selectedReward.tone}`}>
              <Icon name={selectedReward.icon} size={30} />
            </span>
            <small>CONFIRMAR RESGATE</small>
            <h2 id="reward-confirm-title">{selectedReward.title}</h2>
            <p>
              Você usará <strong>{selectedReward.points.toLocaleString("pt-BR")} EcoPontos</strong>.
              O cupom ficará disponível imediatamente na sua carteira.
            </p>
            <div className="reward-confirm-balance">
              <span>Saldo atual</span>
              <strong>{balance.toLocaleString("pt-BR")}</strong>
              <Icon name="arrow" size={15} />
              <span>Novo saldo</span>
              <strong>{(balance - selectedReward.points).toLocaleString("pt-BR")}</strong>
            </div>
            <button className="primary-btn" onClick={confirmRedemption}>
              Confirmar resgate <Icon name="arrow" size={16} />
            </button>
            <button className="reward-cancel" onClick={() => setSelectedReward(null)}>
              Agora não
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const initialProfile = {
  name: "Marina Pereira",
  email: "marina.pereira@email.com",
  phone: "(11) 98765-4321",
  birthDate: "1992-05-14",
  city: "São Paulo",
  state: "SP",
  neighborhood: "Jardim Paulista",
  bio: "Acredito que pequenas escolhas diárias podem transformar o futuro. Reciclo, compartilho e inspiro.",
};

function UserProfile({ onToast }: { onToast: (message: string) => void }) {
  const [section, setSection] = useState<"Dados pessoais" | "Preferências" | "Segurança">(
    "Dados pessoais",
  );
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const [preferences, setPreferences] = useState({
    collectionReminders: true,
    weeklyProgress: true,
    newRewards: true,
    nearbyPoints: false,
    newsletter: false,
  });
  const [twoFactor, setTwoFactor] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", next: "", confirmation: "" });

  const updatePreference = (key: keyof typeof preferences) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  const saveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    setProfile(draft);
    setIsEditing(false);
    onToast("Perfil atualizado com sucesso.");
  };

  const updatePassword = (event: React.FormEvent) => {
    event.preventDefault();
    if (passwords.next !== passwords.confirmation) {
      onToast("As novas senhas não coincidem.");
      return;
    }
    setPasswords({ current: "", next: "", confirmation: "" });
    onToast("Senha alterada com sucesso.");
  };

  return (
    <section className="profile-page">
      <div className="profile-heading">
        <div>
          <div className="eyebrow">
            <span /> Sua conta EcoSpot
          </div>
          <h1>
            Seu perfil, seu <em>impacto.</em>
          </h1>
          <p>Gerencie seus dados, preferências e acompanhe as conquistas da sua jornada.</p>
        </div>
        {section === "Dados pessoais" && (
          <button
            className={isEditing ? "profile-heading-action editing" : "profile-heading-action"}
            onClick={() => {
              if (isEditing) {
                setDraft(profile);
                setIsEditing(false);
              } else {
                setIsEditing(true);
              }
            }}
          >
            <Icon name={isEditing ? "close" : "user"} size={16} />
            {isEditing ? "Cancelar edição" : "Editar perfil"}
          </button>
        )}
      </div>

      <article className="profile-hero">
        <div className="profile-hero-person">
          <div className="profile-large-avatar">
            MP
            <button
              aria-label="Alterar foto de perfil"
              onClick={() => onToast("Seletor de foto de perfil aberto")}
            >
              <Icon name="user" size={13} />
            </button>
          </div>
          <div>
            <span>MEMBRO DESDE MARÇO DE 2024</span>
            <h2>{profile.name}</h2>
            <p>
              <Icon name="pin" size={13} /> {profile.city}, {profile.state}
            </p>
          </div>
        </div>
        <div className="profile-level-summary">
          <div className="profile-level-title">
            <span>
              <Icon name="leaf" size={16} /> GUARDIÃO VERDE
            </span>
            <b>NÍVEL 3</b>
          </div>
          <strong>
            1.280 <small>EcoPontos</small>
          </strong>
          <div className="profile-level-bar">
            <i />
          </div>
          <p>
            <span>64% concluído</span>
            <span>720 para Embaixador Eco</span>
          </p>
        </div>
        <div className="profile-hero-stats">
          {[
            { value: "110,6", unit: "kg", label: "RECICLADOS" },
            { value: "18", unit: "", label: "DESCARTES" },
            { value: "7", unit: "", label: "CONQUISTAS" },
          ].map((stat) => (
            <div key={stat.label}>
              <strong>
                {stat.value} <small>{stat.unit}</small>
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <Icon name="leaf" size={250} />
      </article>

      <div className="profile-layout">
        <aside className="profile-navigation dashboard-panel">
          <span>CONFIGURAÇÕES DA CONTA</span>
          <nav aria-label="Seções do perfil">
            {[
              {
                label: "Dados pessoais" as const,
                icon: "user" as IconName,
                description: "Informações e endereço",
              },
              {
                label: "Preferências" as const,
                icon: "bell" as IconName,
                description: "Notificações e comunicação",
              },
              {
                label: "Segurança" as const,
                icon: "check" as IconName,
                description: "Senha e proteção da conta",
              },
            ].map((item) => (
              <button
                key={item.label}
                className={section === item.label ? "active" : ""}
                onClick={() => {
                  setSection(item.label);
                  setIsEditing(false);
                }}
              >
                <i>
                  <Icon name={item.icon} size={17} />
                </i>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
                <Icon name="arrow" size={14} />
              </button>
            ))}
          </nav>
          <div className="profile-completion">
            <div>
              <span>
                <Icon name="target" size={16} />
              </span>
              <div>
                <strong>Perfil 85% completo</strong>
                <small>Adicione uma foto para concluir.</small>
              </div>
            </div>
            <div className="profile-completion-bar">
              <i />
            </div>
          </div>
        </aside>

        <div className="profile-main-column">
          {section === "Dados pessoais" && (
            <form className="profile-form dashboard-panel" onSubmit={saveProfile}>
              <div className="profile-panel-heading">
                <div>
                  <span>INFORMAÇÕES PESSOAIS</span>
                  <h2>Seus dados</h2>
                  <p>Essas informações ajudam a personalizar sua experiência no EcoSpot.</p>
                </div>
                {!isEditing && (
                  <span className="profile-verified">
                    <Icon name="check" size={13} /> Conta verificada
                  </span>
                )}
              </div>
              <div className="profile-form-grid">
                <label>
                  Nome completo
                  <input
                    type="text"
                    value={draft.name}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, name: event.target.value })}
                    required
                  />
                </label>
                <label>
                  E-mail
                  <span className="profile-input-verified">
                    <input
                      type="email"
                      value={draft.email}
                      disabled={!isEditing}
                      onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                      required
                    />
                    <Icon name="check" size={13} />
                  </span>
                </label>
                <label>
                  Telefone
                  <input
                    type="tel"
                    value={draft.phone}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, phone: event.target.value })}
                    required
                  />
                </label>
                <label>
                  Data de nascimento
                  <input
                    type="date"
                    value={draft.birthDate}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, birthDate: event.target.value })}
                    required
                  />
                </label>
              </div>
              <div className="profile-form-divider" />
              <div className="profile-form-section-title">
                <span>
                  <Icon name="pin" size={16} />
                </span>
                <div>
                  <strong>Sua localização</strong>
                  <small>Usada para encontrar EcoSpots e ações perto de você.</small>
                </div>
              </div>
              <div className="profile-form-grid address">
                <label>
                  Cidade
                  <input
                    type="text"
                    value={draft.city}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, city: event.target.value })}
                    required
                  />
                </label>
                <label>
                  Estado
                  <select
                    value={draft.state}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, state: event.target.value })}
                  >
                    <option>SP</option>
                    <option>RJ</option>
                    <option>MG</option>
                    <option>PR</option>
                  </select>
                </label>
                <label>
                  Bairro
                  <input
                    type="text"
                    value={draft.neighborhood}
                    disabled={!isEditing}
                    onChange={(event) => setDraft({ ...draft, neighborhood: event.target.value })}
                    required
                  />
                </label>
              </div>
              <label className="profile-bio">
                Sobre você
                <textarea
                  value={draft.bio}
                  disabled={!isEditing}
                  maxLength={180}
                  onChange={(event) => setDraft({ ...draft, bio: event.target.value })}
                />
                {isEditing && <small>{draft.bio.length}/180 caracteres</small>}
              </label>
              {isEditing && (
                <div className="profile-form-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setDraft(profile);
                      setIsEditing(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button className="primary-btn" type="submit">
                    Salvar alterações <Icon name="check" size={15} />
                  </button>
                </div>
              )}
            </form>
          )}

          {section === "Preferências" && (
            <article className="profile-preferences dashboard-panel">
              <div className="profile-panel-heading">
                <div>
                  <span>PREFERÊNCIAS</span>
                  <h2>Notificações e comunicação</h2>
                  <p>Escolha quais novidades e lembretes você deseja receber.</p>
                </div>
              </div>
              <div className="preference-group">
                <span>ATIVIDADE E PROGRESSO</span>
                {[
                  {
                    key: "collectionReminders" as const,
                    icon: "clock" as IconName,
                    title: "Lembretes de coleta",
                    text: "Receba avisos sobre datas de coleta na sua região.",
                  },
                  {
                    key: "weeklyProgress" as const,
                    icon: "chart" as IconName,
                    title: "Resumo semanal",
                    text: "Acompanhe seus pontos, descartes e impacto da semana.",
                  },
                  {
                    key: "nearbyPoints" as const,
                    icon: "pin" as IconName,
                    title: "Novos EcoSpots próximos",
                    text: "Saiba quando um novo ponto de coleta abrir perto de você.",
                  },
                ].map((item) => (
                  <div className="preference-row" key={item.key}>
                    <span>
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </div>
                    <button
                      role="switch"
                      aria-checked={preferences[item.key]}
                      className={preferences[item.key] ? "profile-switch active" : "profile-switch"}
                      onClick={() => updatePreference(item.key)}
                    >
                      <i />
                    </button>
                  </div>
                ))}
              </div>
              <div className="preference-group">
                <span>NOVIDADES ECOSPOT</span>
                {[
                  {
                    key: "newRewards" as const,
                    icon: "gift" as IconName,
                    title: "Novas recompensas",
                    text: "Benefícios, experiências e parceiros que acabaram de chegar.",
                  },
                  {
                    key: "newsletter" as const,
                    icon: "leaf" as IconName,
                    title: "Conteúdo sustentável",
                    text: "Dicas práticas e histórias da comunidade uma vez por mês.",
                  },
                ].map((item) => (
                  <div className="preference-row" key={item.key}>
                    <span>
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </div>
                    <button
                      role="switch"
                      aria-checked={preferences[item.key]}
                      className={preferences[item.key] ? "profile-switch active" : "profile-switch"}
                      onClick={() => updatePreference(item.key)}
                    >
                      <i />
                    </button>
                  </div>
                ))}
              </div>
              <div className="preference-note">
                <Icon name="check" size={16} />
                <p>
                  Suas preferências são salvas automaticamente. Comunicações essenciais sobre sua
                  conta continuarão ativas.
                </p>
              </div>
            </article>
          )}

          {section === "Segurança" && (
            <div className="profile-security-stack">
              <article className="profile-security dashboard-panel">
                <div className="profile-panel-heading">
                  <div>
                    <span>SEGURANÇA DA CONTA</span>
                    <h2>Senha e acesso</h2>
                    <p>Mantenha sua conta protegida com uma senha forte e atualizada.</p>
                  </div>
                </div>
                <div className="security-status">
                  <span>
                    <Icon name="check" size={18} />
                  </span>
                  <div>
                    <strong>Sua conta está protegida</strong>
                    <small>Último acesso hoje às 09:42 · São Paulo, SP</small>
                  </div>
                </div>
                <form className="password-form" onSubmit={updatePassword}>
                  <label>
                    Senha atual
                    <input
                      type="password"
                      placeholder="Digite sua senha atual"
                      value={passwords.current}
                      onChange={(event) =>
                        setPasswords({ ...passwords, current: event.target.value })
                      }
                      minLength={8}
                      required
                    />
                  </label>
                  <div>
                    <label>
                      Nova senha
                      <input
                        type="password"
                        placeholder="Mínimo de 8 caracteres"
                        value={passwords.next}
                        onChange={(event) =>
                          setPasswords({ ...passwords, next: event.target.value })
                        }
                        minLength={8}
                        required
                      />
                    </label>
                    <label>
                      Confirmar nova senha
                      <input
                        type="password"
                        placeholder="Repita a nova senha"
                        value={passwords.confirmation}
                        onChange={(event) =>
                          setPasswords({ ...passwords, confirmation: event.target.value })
                        }
                        minLength={8}
                        required
                      />
                    </label>
                  </div>
                  <button className="primary-btn" type="submit">
                    Atualizar senha <Icon name="arrow" size={15} />
                  </button>
                </form>
              </article>
              <article className="two-factor-card dashboard-panel">
                <span>
                  <Icon name="user" size={20} />
                </span>
                <div>
                  <strong>Verificação em duas etapas</strong>
                  <small>Adicione uma camada extra de segurança ao entrar na sua conta.</small>
                </div>
                <button
                  role="switch"
                  aria-checked={twoFactor}
                  className={twoFactor ? "profile-switch active" : "profile-switch"}
                  onClick={() => {
                    setTwoFactor(!twoFactor);
                    onToast(
                      twoFactor
                        ? "Verificação em duas etapas desativada."
                        : "Verificação em duas etapas ativada.",
                    );
                  }}
                >
                  <i />
                </button>
              </article>
            </div>
          )}
        </div>
      </div>

      <section className="profile-achievements">
        <div className="profile-achievements-heading">
          <div>
            <span>SUAS CONQUISTAS</span>
            <h2>Marcos da sua jornada</h2>
          </div>
          <button onClick={() => onToast("Galeria de conquistas aberta")}>
            Ver todas as conquistas <Icon name="arrow" size={14} />
          </button>
        </div>
        <div className="profile-achievement-grid">
          {[
            {
              icon: "leaf" as IconName,
              title: "Primeira semente",
              text: "Seu primeiro descarte",
              date: "12 MAR 2024",
              tone: "green",
              unlocked: true,
            },
            {
              icon: "clock" as IconName,
              title: "Consistência verde",
              text: "4 semanas consecutivas",
              date: "04 AGO 2025",
              tone: "amber",
              unlocked: true,
            },
            {
              icon: "star" as IconName,
              title: "100 kg de impacto",
              text: "Mais de 100 kg reciclados",
              date: "18 AGO 2025",
              tone: "violet",
              unlocked: true,
            },
            {
              icon: "heart" as IconName,
              title: "Impacto coletivo",
              text: "Faça sua primeira doação",
              date: "AINDA BLOQUEADA",
              tone: "locked",
              unlocked: false,
            },
          ].map((achievement) => (
            <article
              className={
                achievement.unlocked
                  ? "profile-achievement-card"
                  : "profile-achievement-card locked"
              }
              key={achievement.title}
            >
              <span className={achievement.tone}>
                <Icon name={achievement.icon} size={22} />
              </span>
              <div>
                <strong>{achievement.title}</strong>
                <p>{achievement.text}</p>
                <small>{achievement.date}</small>
              </div>
              {achievement.unlocked && (
                <i>
                  <Icon name="check" size={11} />
                </i>
              )}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function Dashboard({
  onLogout,
  onToast,
}: {
  onLogout: () => void;
  onToast: (message: string) => void;
}) {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Visão geral");
  const [selectedMaterial, setSelectedMaterial] = useState("Todos");

  const navItems = [
    { label: "Visão geral", icon: "home" as IconName },
    { label: "Pontos de coleta", icon: "pin" as IconName },
    { label: "Meus descartes", icon: "chart" as IconName },
    { label: "Metas", icon: "target" as IconName },
    { label: "Recompensas", icon: "gift" as IconName },
    { label: "Meu perfil", icon: "user" as IconName },
  ];

  return (
    <div className="dashboard-shell">
      <aside className={mobileNav ? "dashboard-sidebar open" : "dashboard-sidebar"}>
        <div className="dashboard-sidebar-top">
          <a className="brand light-brand" href="#dashboard">
            <span className="brand-mark">
              <Icon name="leaf" size={22} />
            </span>
            <span>
              Eco<span>Spot</span>
            </span>
          </a>
          <button
            className="dashboard-nav-close"
            aria-label="Fechar menu"
            onClick={() => setMobileNav(false)}
          >
            <Icon name="close" />
          </button>
        </div>
        <nav className="dashboard-nav" aria-label="Menu do painel">
          <small>MENU PRINCIPAL</small>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={activeNav === item.label ? "active" : ""}
              onClick={() => {
                setActiveNav(item.label);
                setMobileNav(false);
                if (
                  item.label !== "Visão geral" &&
                  item.label !== "Pontos de coleta" &&
                  item.label !== "Meus descartes" &&
                  item.label !== "Recompensas" &&
                  item.label !== "Meu perfil"
                ) {
                  onToast(`${item.label}: visualização de demonstração`);
                }
              }}
            >
              <Icon name={item.icon} size={19} />
              {item.label}
              {item.label === "Recompensas" && <span className="nav-badge">3</span>}
            </button>
          ))}
        </nav>
        <div className="dashboard-side-card">
          <span>
            <Icon name="leaf" size={18} />
          </span>
          <strong>Seu impacto cresce a cada descarte.</strong>
          <p>Você já evitou 18,4 kg de CO₂ este mês.</p>
        </div>
        <button className="dashboard-logout" onClick={onLogout}>
          <Icon name="logout" size={18} /> Sair da conta
        </button>
      </aside>

      {mobileNav && (
        <button
          className="dashboard-nav-overlay"
          aria-label="Fechar menu"
          onClick={() => setMobileNav(false)}
        />
      )}

      <div className="dashboard-main">
        <header className="dashboard-header">
          <button
            className="dashboard-menu"
            aria-label="Abrir menu"
            onClick={() => setMobileNav(true)}
          >
            <Icon name="menu" />
          </button>
          <div className="dashboard-location">
            <Icon name="pin" size={17} />
            <span>
              SUA REGIÃO <strong>São Paulo, SP</strong>
            </span>
          </div>
          <div className="dashboard-profile">
            <button className="notification-btn" aria-label="Notificações">
              <Icon name="bell" size={19} />
              <span />
            </button>
            <button
              className="profile-trigger"
              aria-label="Abrir meu perfil"
              onClick={() => setActiveNav("Meu perfil")}
            >
              <span className="profile-avatar">MP</span>
              <span>
                <strong>Marina Pereira</strong>
                <small>Guardião Verde</small>
              </span>
            </button>
          </div>
        </header>

        <main
          className={
            activeNav === "Pontos de coleta"
              ? "dashboard-content map-view"
              : activeNav === "Meus descartes"
                ? "dashboard-content tracking-view"
                : activeNav === "Recompensas"
                  ? "dashboard-content rewards-view"
                  : activeNav === "Meu perfil"
                    ? "dashboard-content profile-view"
                    : "dashboard-content"
          }
          id="dashboard"
        >
          {activeNav === "Pontos de coleta" ? (
            <CollectionMap onToast={onToast} />
          ) : activeNav === "Meus descartes" ? (
            <RecyclingTracking onToast={onToast} />
          ) : activeNav === "Recompensas" ? (
            <RewardsSystem onToast={onToast} />
          ) : activeNav === "Meu perfil" ? (
            <UserProfile onToast={onToast} />
          ) : (
            <>
              <section className="dashboard-welcome">
                <div>
                  <div className="eyebrow">
                    <span /> Segunda-feira, 18 de agosto
                  </div>
                  <h1>
                    Bom dia, Marina. <em>Vamos fazer a diferença?</em>
                  </h1>
                  <p>Seu próximo descarte está a poucos passos de transformar o mundo.</p>
                </div>
                <button
                  className="primary-btn"
                  onClick={() => onToast("Leitor de QR Code aberto no modo de demonstração")}
                >
                  <Icon name="plastic" size={18} /> Registrar descarte
                </button>
              </section>

              <section className="dashboard-metrics" aria-label="Resumo do seu impacto">
                <article className="metric-card points">
                  <div className="metric-icon">
                    <Icon name="gift" size={22} />
                  </div>
                  <div className="metric-label">
                    <span>ECOPONTOS</span>
                    <button onClick={() => onToast("Histórico de EcoPontos aberto")}>
                      Ver histórico <Icon name="arrow" size={13} />
                    </button>
                  </div>
                  <strong>1.280</strong>
                  <p>
                    <b>+120</b> nos últimos 7 dias
                  </p>
                  <div className="metric-sparkline">
                    {[25, 38, 30, 51, 48, 67, 62, 78, 75, 91].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </article>
                <article className="metric-card">
                  <div className="metric-icon mint">
                    <Icon name="box" size={22} />
                  </div>
                  <div className="metric-label">
                    <span>MATERIAIS RECICLADOS</span>
                    <small>ESTE MÊS</small>
                  </div>
                  <strong>
                    24,8 <small>kg</small>
                  </strong>
                  <p>
                    <b>↑ 18%</b> em relação a julho
                  </p>
                  <div className="materials-mini">
                    <span style={{ width: "44%", background: "#e7b343" }} />
                    <span style={{ width: "28%", background: "#4d9f67" }} />
                    <span style={{ width: "18%", background: "#4799df" }} />
                    <span style={{ width: "10%", background: "#815fc5" }} />
                  </div>
                </article>
                <article className="metric-card">
                  <div className="metric-icon blue">
                    <Icon name="target" size={22} />
                  </div>
                  <div className="metric-label">
                    <span>META MENSAL</span>
                    <small>18 DIAS RESTANTES</small>
                  </div>
                  <div className="goal-value">
                    <strong>68%</strong>
                    <span>24,8 de 36 kg</span>
                  </div>
                  <div className="goal-ring">
                    <svg viewBox="0 0 44 44">
                      <circle cx="22" cy="22" r="18" />
                      <circle cx="22" cy="22" r="18" pathLength="100" />
                    </svg>
                  </div>
                  <p>Faltam apenas 11,2 kg. Você consegue!</p>
                </article>
              </section>

              <section className="dashboard-grid">
                <div className="dashboard-column-main">
                  <article className="personal-goals dashboard-panel">
                    <div className="panel-title">
                      <div>
                        <span>SEU PROGRESSO</span>
                        <h2>Metas pessoais</h2>
                      </div>
                      <button onClick={() => onToast("Todas as metas abertas")}>
                        Ver todas <Icon name="arrow" size={14} />
                      </button>
                    </div>
                    <div className="goal-list">
                      {[
                        {
                          icon: "plastic" as IconName,
                          title: "Reciclar 12 kg de plástico",
                          info: "8,5 de 12 kg",
                          progress: 71,
                          color: "#e7b343",
                        },
                        {
                          icon: "clock" as IconName,
                          title: "4 semanas consecutivas",
                          info: "3 de 4 semanas",
                          progress: 75,
                          color: "#4d9f67",
                        },
                        {
                          icon: "gift" as IconName,
                          title: "Conquistar 2.000 EcoPontos",
                          info: "1.280 de 2.000",
                          progress: 64,
                          color: "#815fc5",
                        },
                      ].map((goal) => (
                        <div className="goal-row" key={goal.title}>
                          <span
                            className="goal-row-icon"
                            style={{ color: goal.color, background: `${goal.color}17` }}
                          >
                            <Icon name={goal.icon} size={20} />
                          </span>
                          <div>
                            <div className="goal-row-info">
                              <strong>{goal.title}</strong>
                              <span>{goal.info}</span>
                            </div>
                            <div className="goal-progress">
                              <i style={{ width: `${goal.progress}%`, background: goal.color }} />
                            </div>
                          </div>
                          <b>{goal.progress}%</b>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="shortcuts dashboard-panel">
                    <div className="panel-title">
                      <div>
                        <span>ACESSO RÁPIDO</span>
                        <h2>O que você quer fazer?</h2>
                      </div>
                    </div>
                    <div className="shortcut-grid">
                      {[
                        {
                          icon: "pin" as IconName,
                          title: "Encontrar EcoSpot",
                          text: "Veja pontos próximos",
                        },
                        {
                          icon: "plastic" as IconName,
                          title: "Registrar descarte",
                          text: "Escaneie o QR Code",
                        },
                        {
                          icon: "gift" as IconName,
                          title: "Trocar pontos",
                          text: "Explore recompensas",
                        },
                        {
                          icon: "chart" as IconName,
                          title: "Ver meu impacto",
                          text: "Acompanhe sua evolução",
                        },
                      ].map((item) => (
                        <button
                          key={item.title}
                          onClick={() =>
                            item.title === "Encontrar EcoSpot"
                              ? setActiveNav("Pontos de coleta")
                              : item.title === "Trocar pontos"
                                ? setActiveNav("Recompensas")
                                : onToast(`${item.title} aberto`)
                          }
                        >
                          <span>
                            <Icon name={item.icon} size={22} />
                          </span>
                          <div>
                            <strong>{item.title}</strong>
                            <small>{item.text}</small>
                          </div>
                          <Icon name="arrow" size={15} />
                        </button>
                      ))}
                    </div>
                  </article>
                </div>

                <article className="nearby-panel dashboard-panel">
                  <div className="panel-title">
                    <div>
                      <span>PERTO DE VOCÊ</span>
                      <h2>Pontos de coleta</h2>
                    </div>
                    <button onClick={() => setActiveNav("Pontos de coleta")}>
                      Ver mapa <Icon name="arrow" size={14} />
                    </button>
                  </div>
                  <div className="dashboard-map">
                    <div className="dash-road road-a" />
                    <div className="dash-road road-b" />
                    <span className="dash-park" />
                    {points.map((point, index) => (
                      <button
                        key={point.name}
                        className={index === 0 ? "dash-map-pin active" : "dash-map-pin"}
                        style={{ left: point.x, top: point.y }}
                        aria-label={point.name}
                      >
                        <Icon name="pin" size={15} />
                      </button>
                    ))}
                    <span className="current-location" />
                  </div>
                  <div className="nearby-filters">
                    {["Todos", "Plástico", "Vidro", "Eletrônicos"].map((material) => (
                      <button
                        key={material}
                        className={selectedMaterial === material ? "active" : ""}
                        onClick={() => setSelectedMaterial(material)}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                  <div className="nearby-list">
                    {points.slice(0, 2).map((point, index) => (
                      <button
                        className="nearby-item"
                        key={point.name}
                        onClick={() => onToast(`Rota para ${point.name} calculada`)}
                      >
                        <span className="nearby-number">0{index + 1}</span>
                        <div>
                          <strong>{point.name}</strong>
                          <small>
                            <i /> Aberto agora · {point.type}
                          </small>
                        </div>
                        <b>{point.distance}</b>
                        <Icon name="arrow" size={15} />
                      </button>
                    ))}
                  </div>
                </article>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWaste, setActiveWaste] = useState("Todos");
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | "recover">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const locate = () => {
    setToast("Localização identificada: São Paulo, SP");
    scrollTo("encontrar");
  };

  if (isLoggedIn) {
    return (
      <>
        <Dashboard
          onLogout={() => {
            setIsLoggedIn(false);
            setToast("Você saiu da sua conta.");
          }}
          onToast={setToast}
        />
        {toast && (
          <div className="toast">
            <Icon name="check" size={17} />
            {toast}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="EcoSpot início">
          <span className="brand-mark">
            <Icon name="leaf" size={22} />
          </span>
          <span>
            Eco<span>Spot</span>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <button onClick={() => scrollTo("como-funciona")}>Como funciona</button>
          <button onClick={() => scrollTo("encontrar")}>Pontos de coleta</button>
          <button onClick={() => scrollTo("recompensas")}>Recompensas</button>
          <button onClick={() => scrollTo("impacto")}>Nosso impacto</button>
          <button
            className="mobile-enter"
            onClick={() => {
              setShowModal(true);
              setMenuOpen(false);
            }}
          >
            Entrar
          </button>
        </nav>
        <div className="nav-actions">
          <button className="login-btn" onClick={() => setShowModal(true)}>
            Entrar
          </button>
          <button className="primary-btn compact" onClick={locate}>
            Começar agora <Icon name="arrow" size={16} />
          </button>
          <button
            className="menu-btn"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-noise" />
          <div className="hero-content">
            <div className="eyebrow light">
              <span /> Sustentabilidade ao seu alcance
            </div>
            <h1>
              Seu descarte,
              <br />
              <em>um novo começo.</em>
            </h1>
            <p>
              Encontre pontos de coleta próximos, descarte corretamente e transforme cada atitude em
              impacto positivo.
            </p>
            <div className="hero-actions">
              <button className="primary-btn cream" onClick={locate}>
                <Icon name="pin" size={19} /> Encontrar ponto próximo
              </button>
              <button className="text-btn light" onClick={() => scrollTo("como-funciona")}>
                Descubra como funciona <Icon name="arrow" size={18} />
              </button>
            </div>
            <div className="hero-proof">
              <div className="avatars">
                <span style={{ backgroundImage: `url(${impactImage})` }} />
                <span className="avatar-a">MR</span>
                <span className="avatar-b">JL</span>
              </div>
              <div>
                <strong>+48 mil pessoas</strong>
                <small>já fazem parte dessa mudança</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Voluntários reunidos em ação de limpeza ambiental" />
            <div className="floating-card impact-card">
              <span className="floating-icon">
                <Icon name="leaf" />
              </span>
              <div>
                <strong>2,8 toneladas</strong>
                <small>recicladas esta semana</small>
              </div>
            </div>
            <div className="floating-card point-card">
              <span className="pulse-dot" />
              <div>
                <strong>12 pontos</strong>
                <small>próximos a você</small>
              </div>
            </div>
          </div>
          <div className="scroll-label">
            <span /> ROLE PARA EXPLORAR
          </div>
        </section>

        <section className="intro-section" id="como-funciona">
          <div className="section-heading">
            <div className="eyebrow">
              <span /> Simples por natureza
            </div>
            <h2>
              Reciclar nunca foi
              <br />
              tão <em>fácil.</em>
            </h2>
          </div>
          <p className="section-lead">
            Do resíduo à recompensa em poucos passos. Nós conectamos você ao destino certo e
            mostramos o impacto real da sua atitude.
          </p>
          <div className="steps-grid">
            {[
              {
                n: "01",
                icon: "search" as IconName,
                title: "Encontre",
                text: "Localize pontos de coleta próximos e filtre pelo tipo de material.",
              },
              {
                n: "02",
                icon: "route" as IconName,
                title: "Descarte",
                text: "Leve seus resíduos ao EcoSpot e registre o descarte pelo aplicativo.",
              },
              {
                n: "03",
                icon: "gift" as IconName,
                title: "Transforme",
                text: "Ganhe pontos, acompanhe seu impacto e troque por recompensas.",
              },
            ].map((step) => (
              <article className="step-card" key={step.n}>
                <span className="step-number">{step.n}</span>
                <div className="step-icon">
                  <Icon name={step.icon} size={28} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="map-section" id="encontrar">
          <div className="map-copy">
            <div className="eyebrow">
              <span /> Perto de você
            </div>
            <h2>
              O destino certo
              <br />
              está <em>logo ali.</em>
            </h2>
            <p>Veja os pontos de coleta da sua região e descubra tudo o que cada local recebe.</p>
            <div className="filter-row">
              {["Todos", ...wasteTypes.map((w) => w.name)].map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveWaste(name)}
                  className={activeWaste === name ? "active" : ""}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="point-list">
              {points.map((point, index) => (
                <button
                  className={selectedPoint === index ? "point-item active" : "point-item"}
                  key={point.name}
                  onClick={() => setSelectedPoint(index)}
                >
                  <span className="point-pin">
                    <Icon name="pin" size={18} />
                  </span>
                  <span>
                    <strong>{point.name}</strong>
                    <small>{point.type}</small>
                  </span>
                  <b>{point.distance}</b>
                </button>
              ))}
            </div>
            <button
              className="primary-btn"
              onClick={() => setToast("Mapa completo aberto no modo de demonstração")}
            >
              Explorar mapa completo <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="map-card">
            <div className="map-search">
              <Icon name="search" size={18} />
              <span>Buscar por endereço ou bairro</span>
              <button onClick={locate}>
                <Icon name="route" size={17} />
              </button>
            </div>
            <div className="map-roads road-1" />
            <div className="map-roads road-2" />
            <div className="map-roads road-3" />
            <div className="map-park park-1">
              PARQUE
              <br />
              TRIANON
            </div>
            <div className="map-park park-2" />
            {points.map((point, index) => (
              <button
                aria-label={point.name}
                key={point.name}
                className={selectedPoint === index ? "map-pin selected" : "map-pin"}
                style={{ left: point.x, top: point.y }}
                onClick={() => setSelectedPoint(index)}
              >
                <Icon name="pin" size={20} />
              </button>
            ))}
            <div className="map-label avenida">AV. PAULISTA</div>
            <div className="map-label consolacao">R. DA CONSOLAÇÃO</div>
            <div className="map-popup">
              <span className="status-dot" />
              <small>ABERTO AGORA</small>
              <strong>{points[selectedPoint].name}</strong>
              <p>
                {points[selectedPoint].type} · {points[selectedPoint].distance}
              </p>
              <button onClick={() => setToast("Rota calculada com sucesso")}>
                Ver rota <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </section>

        <section className="materials-section">
          <div>
            <div className="eyebrow">
              <span /> Separe. Entregue. Renove.
            </div>
            <h2>
              Todo material
              <br />
              tem <em>valor.</em>
            </h2>
          </div>
          <div className="materials-grid">
            {wasteTypes.map((item) => (
              <button
                className="material-card"
                key={item.name}
                onClick={() => {
                  setActiveWaste(item.name);
                  scrollTo("encontrar");
                }}
              >
                <span
                  className="material-icon"
                  style={{ color: item.color, background: `${item.color}16` }}
                >
                  <Icon name={item.icon} size={27} />
                </span>
                <strong>{item.name}</strong>
                <Icon name="arrow" size={17} />
              </button>
            ))}
          </div>
        </section>

        <section className="rewards-section" id="recompensas">
          <div className="rewards-visual">
            <div className="score-card">
              <div className="score-top">
                <span>NÍVEL ATUAL</span>
                <span className="level-tag">Guardião Verde</span>
              </div>
              <div className="score-main">
                <strong>1.280</strong>
                <span>ECOPONTOS</span>
              </div>
              <div className="progress">
                <i />
              </div>
              <div className="progress-label">
                <span>720 pontos para o próximo nível</span>
                <b>64%</b>
              </div>
            </div>
            <div className="reward-mini reward-one">
              <Icon name="gift" />
              <div>
                <b>Você ganhou!</b>
                <span>+120 pontos</span>
              </div>
            </div>
            <div className="reward-mini reward-two">
              <Icon name="chart" />
              <div>
                <b>Sequência ativa</b>
                <span>4 semanas</span>
              </div>
            </div>
          </div>
          <div className="rewards-copy">
            <div className="eyebrow light">
              <span /> Faça o bem. Ganhe também.
            </div>
            <h2>
              Suas escolhas
              <br />
              valem <em>pontos.</em>
            </h2>
            <p>
              Cada descarte correto rende EcoPontos. Evolua de nível, desbloqueie conquistas e
              troque por benefícios em parceiros que compartilham o mesmo propósito.
            </p>
            <ul>
              <li>
                <span>
                  <Icon name="check" size={15} />
                </span>{" "}
                Descontos em marcas sustentáveis
              </li>
              <li>
                <span>
                  <Icon name="check" size={15} />
                </span>{" "}
                Ingressos e experiências exclusivas
              </li>
              <li>
                <span>
                  <Icon name="check" size={15} />
                </span>{" "}
                Doações para projetos ambientais
              </li>
            </ul>
            <button className="primary-btn cream" onClick={() => setShowModal(true)}>
              Quero acumular pontos <Icon name="arrow" size={17} />
            </button>
          </div>
        </section>

        <section className="impact-section" id="impacto">
          <div className="impact-photo">
            <img src={impactImage} alt="Pessoa participando de uma ação de coleta de resíduos" />
            <span>Foto por OCG Saving The Ocean</span>
          </div>
          <div className="impact-content">
            <div className="eyebrow">
              <span /> Impacto coletivo
            </div>
            <h2>
              Pequenas ações.
              <br />
              <em>Grandes mudanças.</em>
            </h2>
            <p>
              Cada embalagem, cada pilha, cada escolha conta. Juntos, já estamos construindo cidades
              mais limpas e um futuro mais circular.
            </p>
            <div className="stats-grid">
              <div>
                <strong>
                  680<small>t</small>
                </strong>
                <span>resíduos destinados</span>
              </div>
              <div>
                <strong>
                  48<small>mil</small>
                </strong>
                <span>pessoas engajadas</span>
              </div>
              <div>
                <strong>1.240</strong>
                <span>pontos de coleta</span>
              </div>
              <div>
                <strong>82</strong>
                <span>cidades conectadas</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="leaf-outline">
            <Icon name="leaf" size={260} />
          </div>
          <div className="eyebrow light">
            <span /> Comece hoje
          </div>
          <h2>
            O planeta precisa
            <br />
            do seu <em>próximo passo.</em>
          </h2>
          <p>
            Encontre um EcoSpot perto de você e transforme o descarte em uma atitude que vale a
            pena.
          </p>
          <button className="primary-btn cream" onClick={locate}>
            <Icon name="pin" size={18} /> Encontrar ponto próximo
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand light-brand" href="#inicio">
              <span className="brand-mark">
                <Icon name="leaf" size={22} />
              </span>
              <span>
                Eco<span>Spot</span>
              </span>
            </a>
            <p>Conectando pessoas, lugares e atitudes por um futuro mais sustentável.</p>
            <div className="socials">
              <button aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </button>
              <button aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </button>
            </div>
          </div>
          <div className="footer-links">
            <strong>PLATAFORMA</strong>
            <button onClick={() => scrollTo("como-funciona")}>Como funciona</button>
            <button onClick={() => scrollTo("encontrar")}>Pontos de coleta</button>
            <button onClick={() => scrollTo("recompensas")}>Recompensas</button>
          </div>
          <div className="footer-links">
            <strong>ECOSPOT</strong>
            <button onClick={() => scrollTo("impacto")}>Sobre nós</button>
            <button onClick={() => setToast("Página de parceiros em breve")}>
              Seja um parceiro
            </button>
            <button onClick={() => setToast("Central de ajuda em breve")}>Ajuda e contato</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EcoSpot. Todos os direitos reservados.</span>
          <div>
            <button>Privacidade</button>
            <button>Termos de uso</button>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowModal(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="modal-close" aria-label="Fechar" onClick={() => setShowModal(false)}>
              <Icon name="close" />
            </button>
            <aside className="auth-mission">
              <a className="brand auth-brand" href="#inicio">
                <span className="brand-mark">
                  <Icon name="leaf" size={22} />
                </span>
                <span>
                  Eco<span>Spot</span>
                </span>
              </a>
              <div className="auth-mission-copy">
                <div className="eyebrow light">
                  <span /> Seu impacto começa aqui
                </div>
                <h2>
                  Cuidar do planeta
                  <br /> pode fazer parte da sua <em>rotina.</em>
                </h2>
                <p>
                  Conectamos você aos pontos de coleta certos e transformamos cada descarte em
                  progresso, recompensas e um futuro mais sustentável.
                </p>
              </div>
              <div className="auth-impact">
                <div>
                  <strong>48 mil</strong>
                  <span>pessoas conectadas</span>
                </div>
                <div>
                  <strong>680 t</strong>
                  <span>resíduos destinados</span>
                </div>
              </div>
              <div className="auth-leaf">
                <Icon name="leaf" size={280} />
              </div>
            </aside>

            <div className="auth-form-panel">
              <a className="brand auth-mobile-brand" href="#inicio">
                <span className="brand-mark">
                  <Icon name="leaf" size={20} />
                </span>
                <span>
                  Eco<span>Spot</span>
                </span>
              </a>

              {authMode !== "recover" && (
                <div className="auth-tabs" role="tablist" aria-label="Acesso à plataforma">
                  <button
                    role="tab"
                    aria-selected={authMode === "login"}
                    className={authMode === "login" ? "active" : ""}
                    onClick={() => setAuthMode("login")}
                  >
                    Entrar
                  </button>
                  <button
                    role="tab"
                    aria-selected={authMode === "signup"}
                    className={authMode === "signup" ? "active" : ""}
                    onClick={() => setAuthMode("signup")}
                  >
                    Criar conta
                  </button>
                </div>
              )}

              <div className="auth-heading">
                <small>
                  {authMode === "login"
                    ? "BEM-VINDO DE VOLTA"
                    : authMode === "signup"
                      ? "COMECE SUA JORNADA"
                      : "RECUPERAR ACESSO"}
                </small>
                <h2 id="modal-title">
                  {authMode === "login"
                    ? "Entre na sua conta"
                    : authMode === "signup"
                      ? "Crie sua conta"
                      : "Esqueceu sua senha?"}
                </h2>
                <p>
                  {authMode === "login"
                    ? "Acompanhe seu impacto e continue fazendo a diferença."
                    : authMode === "signup"
                      ? "Leva menos de um minuto para começar a transformar seus hábitos."
                      : "Informe seu e-mail e enviaremos as instruções para redefinir sua senha."}
                </p>
              </div>

              <form
                className="auth-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setShowModal(false);
                  setToast(
                    authMode === "login"
                      ? "Bem-vindo ao protótipo EcoSpot!"
                      : authMode === "signup"
                        ? "Conta criada com sucesso!"
                        : "Instruções enviadas para o seu e-mail!",
                  );
                  if (authMode !== "recover") setIsLoggedIn(true);
                  if (authMode === "recover") setAuthMode("login");
                }}
              >
                {authMode === "signup" && (
                  <label>
                    Nome completo
                    <input type="text" placeholder="Como podemos chamar você?" required />
                  </label>
                )}
                <label>
                  E-mail
                  <input type="email" placeholder="voce@email.com" required />
                </label>
                {authMode !== "recover" && (
                  <label>
                    <span className="password-label">
                      Senha
                      {authMode === "login" && (
                        <button type="button" onClick={() => setAuthMode("recover")}>
                          Esqueci minha senha
                        </button>
                      )}
                    </span>
                    <input
                      type="password"
                      placeholder={authMode === "signup" ? "Mínimo de 8 caracteres" : "••••••••"}
                      minLength={8}
                      required
                    />
                  </label>
                )}
                {authMode === "signup" && (
                  <label className="terms-check">
                    <input type="checkbox" required />
                    <span>
                      Concordo com os <button type="button">Termos de uso</button> e a{" "}
                      <button type="button">Política de privacidade</button>.
                    </span>
                  </label>
                )}
                <button className="primary-btn full" type="submit">
                  {authMode === "login"
                    ? "Entrar na plataforma"
                    : authMode === "signup"
                      ? "Criar minha conta"
                      : "Enviar instruções"}{" "}
                  <Icon name="arrow" size={17} />
                </button>
              </form>

              {authMode === "recover" ? (
                <button className="signup-link" onClick={() => setAuthMode("login")}>
                  Voltar para o login
                </button>
              ) : (
                <p className="auth-switch">
                  {authMode === "login" ? "Ainda não tem uma conta?" : "Já faz parte do EcoSpot?"}
                  <button onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}>
                    {authMode === "login" ? "Criar conta grátis" : "Entrar"}
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div className="toast">
          <Icon name="check" size={17} />
          {toast}
        </div>
      )}
    </div>
  );
}
