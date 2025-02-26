import Footer from '@/components/Footer'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
