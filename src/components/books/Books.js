import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle } from "../../styles/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import pastBooks from "../../data/pastbooks";
import potentialBooks from "../../data/potentialbooks";

const BooksWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }
`;

const TabNav = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone200};
`;

const TabButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.navy : theme.colors.textSecondary};
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active, theme }) =>
    $active ? theme.colors.gold : "transparent"};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-bottom: -1px;
  letter-spacing: 0.02em;

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
  }

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const FilterChip = styled.button`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.navy : theme.colors.textSecondary};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.goldSubtle : theme.colors.stone100};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.gold : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-transform: capitalize;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.goldSubtle : theme.colors.stone200};
  }
`;

const ControlsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SortControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const SortLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.navy : theme.colors.textSecondary};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.goldSubtle : theme.colors.stone100};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.gold : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.goldSubtle : theme.colors.stone200};
  }
`;

const BookCount = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.xl};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const TableHead = styled.thead`
  background: ${({ theme }) => theme.colors.ivory};
`;

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone200};
  white-space: nowrap;
  cursor: ${({ $sortable }) => ($sortable ? 'pointer' : 'default')};
  user-select: ${({ $sortable }) => ($sortable ? 'none' : 'auto')};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ $sortable, theme }) =>
      $sortable ? theme.colors.navy : theme.colors.textSecondary};
  }

  ${media.md} {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;

const ThContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const SortIcon = styled.span`
  font-size: 0.625rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0.3)};
  transition: opacity ${({ theme }) => theme.transitions.fast};
`;

const Td = styled.td`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone100};
  vertical-align: top;

  ${media.md} {
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;

const TableRow = styled.tr`
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.goldSubtle};
  }

  &:last-child ${Td} {
    border-bottom: none;
  }
`;

const BookTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 1.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  background: ${({ theme, $value }) => {
    const num = parseInt($value);
    if (num >= 9) return theme.colors.navy;
    if (num >= 7) return theme.colors.gold;
    return theme.colors.stone400;
  }};
  color: ${({ theme, $value }) => {
    const num = parseInt($value);
    if (num >= 7) return theme.colors.cream;
    return theme.colors.cream;
  }};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const TopicBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.stone100};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const MobileBookCard = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone200};

  &:last-child {
    border-bottom: none;
  }
`;

const MobileBookTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const MobileBookMeta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MobileBookBottom = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const DesktopOnly = styled.div`
  display: none;
  ${media.md} {
    display: block;
  }
`;

const MobileOnly = styled.div`
  display: block;
  ${media.md} {
    display: none;
  }
`;

const MobileCardList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.ivory};
`;

export default function Books() {
  const [activeTab, setActiveTab] = useState("read");
  const [topicFilter, setTopicFilter] = useState("all");
  const [sortBy, setSortBy] = useState("none"); // 'none' | 'rating-desc' | 'rating-asc' | 'year-desc' | 'year-asc'

  const currentBooks = activeTab === "read" ? pastBooks : potentialBooks;

  const topics = useMemo(() => {
    const set = new Set(currentBooks.map((b) => b.topic));
    return ["all", ...Array.from(set).sort()];
  }, [currentBooks]);

  const filteredBooks = useMemo(() => {
    let books = topicFilter === "all"
      ? [...currentBooks]
      : currentBooks.filter((b) => b.topic === topicFilter);

    if (sortBy === "rating-desc") {
      books.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
    } else if (sortBy === "rating-asc") {
      books.sort((a, b) => parseInt(a.rating) - parseInt(b.rating));
    } else if (sortBy === "year-desc") {
      books.sort((a, b) => parseInt(b.date || 0) - parseInt(a.date || 0));
    } else if (sortBy === "year-asc") {
      books.sort((a, b) => parseInt(a.date || 0) - parseInt(b.date || 0));
    }

    return books;
  }, [currentBooks, topicFilter, sortBy]);

  const toggleSort = (field) => {
    setSortBy((prev) => {
      if (prev === `${field}-desc`) return `${field}-asc`;
      if (prev === `${field}-asc`) return 'none';
      return `${field}-desc`;
    });
  };

  const getSortIcon = (field) => {
    if (sortBy === `${field}-desc`) return faArrowDown;
    if (sortBy === `${field}-asc`) return faArrowUp;
    return faArrowDown;
  };

  const isSortActive = (field) =>
    sortBy === `${field}-desc` || sortBy === `${field}-asc`;

  return (
    <BooksWrapper>
      <Container>
        <SectionTitle>Books</SectionTitle>

        <TabNav role="tablist">
          <TabButton
            role="tab"
            $active={activeTab === "read"}
            onClick={() => {
              setActiveTab("read");
              setTopicFilter("all");
              setSortBy("none");
            }}
            aria-selected={activeTab === "read"}
          >
            Books I've Read
          </TabButton>
          <TabButton
            role="tab"
            $active={activeTab === "want"}
            onClick={() => {
              setActiveTab("want");
              setTopicFilter("all");
              setSortBy("none");
            }}
            aria-selected={activeTab === "want"}
          >
            Want to Read
          </TabButton>
        </TabNav>

        <FilterBar>
          {topics.map((topic) => (
            <FilterChip
              key={topic}
              $active={topicFilter === topic}
              onClick={() => setTopicFilter(topic)}
            >
              {topic}
            </FilterChip>
          ))}
        </FilterBar>

        <ControlsRow>
          <BookCount>
            {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}
          </BookCount>
          <SortControls>
            <SortLabel>Sort by:</SortLabel>
            <SortButton
              $active={isSortActive("rating")}
              onClick={() => toggleSort("rating")}
            >
              Rating
              <FontAwesomeIcon icon={getSortIcon("rating")} size="xs" />
            </SortButton>
            {activeTab === "read" && (
              <SortButton
                $active={isSortActive("year")}
                onClick={() => toggleSort("year")}
              >
                Year
                <FontAwesomeIcon icon={getSortIcon("year")} size="xs" />
              </SortButton>
            )}
          </SortControls>
        </ControlsRow>

        {/* Desktop Table */}
        <DesktopOnly>
          <TableWrapper>
            <StyledTable>
              <TableHead>
                <tr>
                  <Th>Title</Th>
                  <Th>Author</Th>
                  {activeTab === "read" && (
                    <Th $sortable onClick={() => toggleSort("year")}>
                      <ThContent>
                        Year
                        <SortIcon $visible={isSortActive("year")}>
                          <FontAwesomeIcon icon={getSortIcon("year")} />
                        </SortIcon>
                      </ThContent>
                    </Th>
                  )}
                  <Th>Topic</Th>
                  <Th $sortable onClick={() => toggleSort("rating")}>
                    <ThContent>
                      Rating
                      <SortIcon $visible={isSortActive("rating")}>
                        <FontAwesomeIcon icon={getSortIcon("rating")} />
                      </SortIcon>
                    </ThContent>
                  </Th>
                </tr>
              </TableHead>
              <tbody>
                {filteredBooks.map((book) => (
                  <TableRow key={book.id}>
                    <Td>
                      <BookTitle>{book.title}</BookTitle>
                    </Td>
                    <Td>{book.author}</Td>
                    {activeTab === "read" && <Td>{book.date}</Td>}
                    <Td>
                      <TopicBadge>{book.topic}</TopicBadge>
                    </Td>
                    <Td>
                      <Rating $value={book.rating}>{book.rating}</Rating>
                    </Td>
                  </TableRow>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        </DesktopOnly>

        {/* Mobile Card List */}
        <MobileOnly>
          <MobileCardList>
            {filteredBooks.map((book) => (
              <MobileBookCard key={book.id}>
                <MobileBookTitle>{book.title}</MobileBookTitle>
                <MobileBookMeta>
                  {book.author}
                  {activeTab === "read" && book.date && ` · ${book.date}`}
                </MobileBookMeta>
                <MobileBookBottom>
                  <TopicBadge>{book.topic}</TopicBadge>
                  <Rating $value={book.rating}>{book.rating}</Rating>
                </MobileBookBottom>
              </MobileBookCard>
            ))}
          </MobileCardList>
        </MobileOnly>
      </Container>
    </BooksWrapper>
  );
}
