include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI Hello World Example
LUCI_DEPENDS:=+luci-base +libiwinfo +libiwinfo-lua

PKG_BUILD_DEPENDS:=iwinfo
PKG_LICENSE:=Apache-2.0

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature