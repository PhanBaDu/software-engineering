import {
  Brain,
  ChartCandlestick,
  ChartNoAxesCombined,
  LucideIcon,
  Mail,
  Plus,
  RefreshCwOff,
  ScanSearch,
  ShipWheel,
  Shirt,
  SquareChartGantt,
  Ticket,
  Truck,
  Vibrate,
} from 'lucide-react';

export interface Items {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface SidebarItem {
  label: string;
  items: Items[];
}

// Menu items.
export const lists: SidebarItem[] = [
  {
    label: 'Quản Lý Đơn Hàng',
    items: [
      {
        title: 'Tất cả',
        url: '/all',
        icon: ScanSearch,
      },
      {
        title: 'Giao hàng loạt',
        url: '/trucks',
        icon: Truck,
      },
      {
        title: 'Bàn giao đơn hàng',
        url: '/orders',
        icon: Shirt,
      },
      {
        title: 'Hủy Đơn / Hoàn tiền',
        url: '/cencels',
        icon: RefreshCwOff,
      },
      {
        title: 'Cài đặt vận chuyển',
        url: '/shippingsettings',
        icon: ShipWheel,
      },
    ],
  },
  {
    label: 'Quản Lý Sản Phẩm',
    items: [
      {
        title: 'Tất cả sản phẩm',
        url: '/products',
        icon: SquareChartGantt,
      },
      {
        title: 'Thêm sản phẩm',
        url: '/createproduct',
        icon: Plus,
      },
    ],
  },
  {
    label: 'Kênh Marketing',
    items: [
      {
        title: 'Quảng cáo TechMall',
        url: '/marketing',
        icon: ChartCandlestick,
      },
      {
        title: 'Mã giảm từ Shop',
        url: '/voucher',
        icon: Ticket,
      },
    ],
  },
  {
    label: 'Chăm sóc khách hàng',
    items: [
      {
        title: 'Quản lý tin nhắn',
        url: '/messages',
        icon: Mail,
      },
      {
        title: 'Quản lý đánh giá',
        url: '/feedback',
        icon: Vibrate,
      },
    ],
  },
  {
    label: 'Tài chính và doanh thu',
    items: [
      {
        title: 'Doanh thu',
        url: '/revenue',
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    label: 'Trí tuệ nhân tạo',
    items: [
      {
        title: 'Trò chuyện với AI',
        url: '/ai',
        icon: Brain,
      },
    ],
  },
];
