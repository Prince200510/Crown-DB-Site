import overview from '../content/docs/overview.md?raw'
import installBuild from '../content/docs/install-build.md?raw'
import cliGuide from '../content/docs/cli-guide.md?raw'
import sqlReference from '../content/docs/sql-reference.md?raw'
import cppApi from '../content/docs/cpp-api-reference.md?raw'
import storageFormat from '../content/docs/storage-format.md?raw'
import troubleshooting from '../content/docs/troubleshooting.md?raw'

export const DOCS = [
  { slug: 'overview', title: 'Overview', content: overview },
  { slug: 'install-build', title: 'Install / Build (Windows + MinGW g++)', content: installBuild },
  { slug: 'cli-guide', title: 'CLI Guide', content: cliGuide },
  { slug: 'sql-reference', title: 'SQL Reference', content: sqlReference },
  { slug: 'cpp-api-reference', title: 'C++ API Reference (wrapper)', content: cppApi },
  { slug: 'storage-format', title: 'Storage Format (high-level)', content: storageFormat },
  { slug: 'troubleshooting', title: 'Troubleshooting', content: troubleshooting },
]

export function getDocBySlug(slug) {
  return DOCS.find((d) => d.slug === slug) || null
}
