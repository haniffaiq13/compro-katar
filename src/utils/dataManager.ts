import { postService } from '../services/localPostService';

export const dataManager = {
  exportData: () => {
    const data = postService.exportPosts();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `karang-taruna-posts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  importData: (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = e.target?.result as string;
          postService.importPosts(jsonData);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  },

  resetData: () => {
    if (confirm('Yakin ingin mereset semua data ke kondisi awal?')) {
      postService.resetToSeedData();
      localStorage.removeItem('kt_auth');
      window.location.href = '/';
    }
  }
};