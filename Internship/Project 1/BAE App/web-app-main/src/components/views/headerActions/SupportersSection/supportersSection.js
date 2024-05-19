import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useQuery } from "react-query";
import styled from "styled-components";

import { fetchBaeData } from "~/api/baeData";
import { BoxConditionalDisplay, Flex, RippleLoader } from "~/components/atoms";
import PinkButtonWithShadow from "~/components/atoms/Button/PinkButtonWithShadow";
import { useDebounce } from "~/hooks";
import { mediaQueryMobileOrTablet } from "~/styles/mixins";
import theme from "~/styles/theme";

export const SupportersSection = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const debouncedInput = useDebounce(searchStr, 300);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const {
    data: baeSupporters,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: "GetBaeData",
    queryFn: async () => {
      const data = await fetchBaeData("supporters");
      return data.data.data;
    },
    enabled: visibleSection,
  });

  useEffect(() => {
    setFilteredUsers(baeSupporters);
  }, [baeSupporters]);

  useEffect(() => {
    if (baeSupporters?.length) {
      setFilteredUsers(
        baeSupporters.filter(
          (x) =>
            x.username.toLowerCase().includes(debouncedInput.toLowerCase()) ||
            x.name.toLowerCase().includes(debouncedInput.toLowerCase())
        )
      );
    }
  }, [debouncedInput]);

  useEffect(() => {
    if (Array.isArray(filteredUsers)) {
      setVisibleUsers(filteredUsers.slice(0, 100));
    }
  }, [filteredUsers]);

  return (
    <>
      <div
        style={{
          color: "#fff",
          fontFamily: theme.fontFamilies.rubik,
          letterSpacing: "4px",
          backgroundColor: "#3D2481",
          borderRadius: "32px",
          cursor: "pointer",
          padding: "12px 20px",
        }}
        onClick={() => setVisibleSection((p) => !p)}
      >
        Supporters
      </div>
      {visibleSection && (
        <div
          style={{
            backdropFilter: "blur(5px)",
            position: "fixed",
            inset: 0,
            zIndex: 99,
          }}
        >
          <StyledFaqContainer style={{}}>
            <InfiniteScroll
              hasMore={visibleUsers?.length < filteredUsers?.length}
              useWindow={false}
              loadMore={() => {
                setVisibleUsers(
                  filteredUsers.slice(0, visibleUsers.length + 100)
                );
              }}
            >
              <div
                style={{
                  fontFamily: theme.fontFamilies.rubik,
                  fontWeight: 600,
                  fontSize: "36px",
                }}
              >
                Phase 1 Supporters
              </div>

              <div
                style={{
                  fontSize: "16px",
                  margin: "20px 0",
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: 600,
                  fontFamily: theme.fontFamilies.rubik,
                }}
              >
                Find below the list of our early supporters who will receive
                2.5X multiplier
              </div>

              <input
                style={{
                  padding: 12,
                  outline: "none",
                  width: "100%",
                  marginBottom: 16,
                  borderRadius: 32,
                  fontStyle: theme.fontFamilies.rubik,
                  border: "none",
                }}
                name="search"
                placeholder="Search username..."
                onChange={(e) => setSearchStr(e.target.value)}
                value={searchStr}
              />

              {isError && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "14px", textAlign: "center" }}>
                    Oops! An error occurred while getting the data.
                  </div>
                  <PinkButtonWithShadow label="Retry" onClick={refetch} />
                </div>
              )}

              {isLoading && !isError && (
                <>
                  <Flex
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <RippleLoader />
                    <span style={{ fontSize: "14px" }}>
                      Fetching supporters...
                    </span>
                  </Flex>
                </>
              )}

              {Boolean(baeSupporters?.length) &&
                Boolean(!visibleUsers?.length) && (
                  <div style={{ fontSize: 12, textAlign: "center" }}>
                    We couldn't find any user with this search...
                  </div>
                )}

              {!isLoading &&
                !isError &&
                !!visibleUsers?.length &&
                visibleUsers.map((x, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <div
                      style={{ display: "flex", gap: 8, alignItems: "center" }}
                    >
                      <img
                        width="40px"
                        height="40px"
                        src={x.photo}
                        loading="lazy"
                        style={{ borderRadius: "40px" }}
                      />
                      <div
                        style={{
                          fontFamily: theme.fontFamilies.rubik,
                          fontSize: "14px",
                        }}
                      >
                        {x.username}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "14px",
                        color: "#FFD800",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        lineHeight: "16px",
                        backgroundColor: "#5431a2",
                      }}
                    >
                      <BoxConditionalDisplay showOnTablet showOnDesktop>
                        2.5x Multiplier
                      </BoxConditionalDisplay>
                      <BoxConditionalDisplay showOnMobile>
                        2.5x
                      </BoxConditionalDisplay>
                    </div>
                  </div>
                ))}

              <div
                onClick={() => setVisibleSection(false)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "40px",
                  top: "40px",
                  border: "2px solid #fff",
                  borderRadius: "100px",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/assets/images/cross.svg" />
              </div>
            </InfiniteScroll>
          </StyledFaqContainer>
        </div>
      )}
    </>
  );
};

const StyledFaqContainer = styled("div")`
  position: absolute;
  right: 40px;
  top: 40px;
  background-color: #3d2481;
  border: 4px solid #5c3ab9;
  border-radius: 20px;
  width: 800px;
  padding: 32px;
  color: #fff;
  font-size: 1.5rem;
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 36px;

  ${mediaQueryMobileOrTablet} {
    font-size: 4rem;
    line-height: 2.5rem;
    width: calc(100vw - 40px);
    left: 20px;
    right: 20px;
    max-height: 90vh;
  }
`;
